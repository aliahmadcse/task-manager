<template>
    <div>
        <h1>Tasks</h1>

        <div class="mb-4">
            <router-link to="/tasks/new" class="btn btn-success ml-2" exact>Create Task</router-link>
        </div>

        <div v-if="tasks && tasks.length > 0" class="d-flex flex-wrap justify-content-start">
            <div
                v-for="task in tasks"
                v-bind:key="task._id"
                class="card mb-2 ml-2 text-white bg-dark"
                style="width: 18rem;"
            >
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title">{{ task.title }}</h5>
                        <span
                            v-bind:class="{ late: taskIsLate(task.dueDate) && !task.completed}"
                            class="small"
                        >
                            {{ task.dueDate
                            | date }}
                        </span>
                    </div>

                    <h6 class="card-subtitle mb-2 text-muted">Created by {{ task.author.userName }}</h6>

                    <p class="card-text">{{ task.body }}</p>

                    <div
                        v-if="task.author._id === $store.state.userId"
                        class="form-group form-check"
                    >
                        <input
                            type="checkbox"
                            class="form-check-input"
                            :disabled="task.completed"
                            v-model="task.completed"
                            v-on:click="markAsCompleted(task)"
                        />
                        <label for="form-check-label">Completed</label>
                    </div>

                    <div
                        v-if="task.author._id === $store.state.userId"
                        class="d-flex justify-content-between"
                    >
                        <router-link
                            type="button"
                            tag="button"
                            class="card-link btn btn-primary"
                            :to="{ name: 'tasks-edit', params: { id: task._id } }"
                            exact
                        >Edit</router-link>
                        <a
                            @click.prevent="showModal(task._id)"
                            class="card-link btn btn-danger"
                            href="#"
                            data-toggle="modal"
                            data-target="#deleteConfirmModal"
                        >Delete</a>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="ml-2">
            <div class="alert alert-info">No tasks found.</div>
        </div>

        <!-- Modal -->
        <div
            class="modal fade text-dark"
            id="deleteConfirmModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="confirmDeleteModal"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="confirmDeleteModal">Delete Confirm?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">Are you sure, you want to delete this task?</div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger" @click="deleteTask">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as taskService from '../../services/TaskService';
import moment from 'moment';
import * as $ from 'jquery';

export default {
    name: 'tasks-all',
    data: function() {
        return {
            tasks: null,
            currentTaskId: null
        };
    },

    beforeRouteEnter(to, from, next) {
        taskService.getAllTasks().then(res => {
            next(vm => {
                vm.tasks = res.data.tasks;
            });
        });
    },

    methods: {
        showModal(taskId) {
            this.currentTaskId = taskId;
            $('#deleteConfirmModal').appendTo('body');
            $('#deleteConfirmModal').modal('show');
        },
        taskIsLate: function(date) {
            return moment(date).isBefore();
        },

        deleteTask: async function() {
            $('#deleteConfirmModal').modal('hide');
            await taskService.deleteTask(this.currentTaskId);
            const index = this.tasks.findIndex(
                task => task._id === this.currentTaskId
            );
            this.tasks.splice(index, 1);
            this.currentTaskId = null;
        },
        markAsCompleted: function(task) {
            task.completed = true;
            const request = {
                task: task
            };
            taskService.updateTask(request);
        }
    }
};
</script>

<style lang="scss" scoped>
.late {
    color: #dc3545;
}
.modal {
    margin-top: 100px;
}
</style>

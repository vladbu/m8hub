<template>
    <v-container fluid fill-height>
        <v-layout row wrap align-center justify-center>
            <v-flex xs12 sm6>
                <v-card-title primary-title fluid class="justify-center">
                    <h1 class="green--text text--lighten-2">TODOS</h1>
                </v-card-title>
                <v-text-field
                    solo
                    placeholder="What needs to be done?"
                    v-model="input.newTask"
                    color="green"
                    :prepend-inner-icon="input.icons[1]"
                    @click:prepend-inner="addTaskHandler()"
                    @keydown.enter="addTaskHandler()"
                ></v-text-field>

                <v-card >
                    <v-progress-linear
                        color="success"
                        value="25"
                    ></v-progress-linear>
                    <v-tabs
                        slider-color="primary"
                    >
                        <v-tab>
                            all
                        </v-tab>
                        <v-tab>
                            active
                        </v-tab>
                        <v-tab>
                            completed
                        </v-tab>
                    </v-tabs>
                    <v-divider></v-divider>
                    <v-list-tile fluid v-for="task in taskList.tasks" :key="task.$index">
                        <v-list-tile-action>
                            <v-checkbox 
                                :label="task.value" 
                                :value="task.value"
                                color="green"
                                @change="taskStatusHandler(taskList.tasks.indexOf(task))"
                            ></v-checkbox>
                        </v-list-tile-action>
                        <v-btn 
                        flat icon color="red lighten-2"
                        @click="removeTaskHandler(taskList.tasks.indexOf(task))"
                        >
                            <v-icon>clear</v-icon>
                        </v-btn>
                    </v-list-tile>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            input: {
                newTask: '',
                icons: [
                    'check_box_outline_blank',
                    'add_box'
                ]
            },
            taskList: {
                progress: {},
                tasks: [],
            }
        }
    },
    methods: {
        addTaskHandler(){
            this.taskList.tasks.push({value: this.input.newTask, completed: false});
            localStorage.setItem('tasks', JSON.stringify(this.taskList.tasks));
            this.input.newTask = '';
        },
        taskStatusHandler(id){
            this.taskList.tasks[id].completed = !this.taskList.tasks[id].completed
        },
        removeTaskHandler(id){
            this.taskList.tasks.splice(id, 1);
            localStorage.setItem('tasks', JSON.stringify(this.taskList.tasks));
        }
    },
    created(){
        if (localStorage.getItem('tasks') !== null ){
            this.taskList.tasks = JSON.parse(localStorage.getItem('tasks'))
        }
    }
}
</script>

<style scoped>

</style>

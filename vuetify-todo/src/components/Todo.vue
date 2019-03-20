<template>
    <v-container 
        fluid 
        fill-height
    >
        <v-layout 
            row 
            wrap 
            align-center 
            justify-center
        >
            <v-flex xs12 sm6>
                <v-card-title 
                primary-title 
                class="justify-center"
                >
                    <h1 class="green--text text--lighten-3 display-3 font-weight-bold"> TODOS </h1>
                </v-card-title>
                <v-text-field
                    solo
                    placeholder="What needs to be done?"
                    v-model="input.newTask"
                    color="green"
                    prepend-inner-icon="add_box"
                    @click:prepend-inner="addTaskHandler()"
                    @keydown.enter="addTaskHandler()"
                ></v-text-field>
                <v-card>
                    <v-progress-linear
                        color="success"
                        :value="progress"
                    ></v-progress-linear>
                    <div class="green--text">
                        {{ this.taskList.tasks.length - this.completedTasks }} items left
                    </div>
                    <v-tabs
                        flat
                        light
                        cycle
                        right
                        slider-color="green"
                    >   
                        <!-- All -->
                        <v-tab 
                            ripple
                        > all </v-tab>
                        <v-tab-item>
                            <v-divider></v-divider>
                            <v-list>
                                <template v-for="task in taskList.tasks">
                                    <v-list-tile :key="task.$index">
                                        <v-list-tile-action>
                                                <v-checkbox 
                                                    v-model="task.completed" 
                                                    color="green"
                                                    @change="saveToLocalStorage()"
                                                ></v-checkbox>
                                            </v-list-tile-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title v-if="task.completed" class="green--text"> {{ task.value }} </v-list-tile-title>
                                                <v-list-tile-title v-else> {{ task.value }} </v-list-tile-title>
                                            </v-list-tile-content>
                                            <v-list-tile-action>
                                                <v-btn 
                                                    flat icon color="red lighten-2"
                                                    @click="removeTaskHandler(taskList.tasks.indexOf(task))"
                                                >
                                                    <v-icon>clear</v-icon>
                                                </v-btn>
                                            </v-list-tile-action>
                                    </v-list-tile>
                                    <v-divider 
                                        v-if="taskList.tasks.indexOf(task) + 1 < taskList.tasks.length"
                                        :key="task.$index"
                                    ></v-divider>
                                </template>
                            </v-list>
                        </v-tab-item>
                        <!-- Active -->
                        <v-tab ripple> active </v-tab>
                        <v-tab-item>
                            <v-divider></v-divider>
                            <v-list>
                                <template v-for="task in taskList.tasks">
                                    <v-list-tile :key="task.$index" v-if="!task.completed">
                                        <v-list-tile-action>
                                                <v-checkbox 
                                                    v-model="task.completed" 
                                                    color="green"
                                                    @change="saveToLocalStorage()"
                                                ></v-checkbox>
                                            </v-list-tile-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title> {{ task.value }} </v-list-tile-title>
                                            </v-list-tile-content>
                                            <v-list-tile-action>
                                                <v-btn 
                                                    flat icon color="red lighten-2"
                                                    @click="removeTaskHandler(taskList.tasks.indexOf(task))"
                                                >
                                                    <v-icon>clear</v-icon>
                                                </v-btn>
                                            </v-list-tile-action>
                                    </v-list-tile>
                                    <v-divider 
                                        v-if="taskList.tasks.indexOf(task) + 1 < taskList.tasks.length && !task.completed"
                                        :key="task.$index"
                                    ></v-divider>
                                </template>
                            </v-list>
                        </v-tab-item>
                        <!-- Completed -->
                        <v-tab ripple> completed </v-tab>
                        <v-tab-item>
                            <v-divider></v-divider>
                            <v-list>
                                <template v-for="task in taskList.tasks">
                                    <v-list-tile :key="task.$index" v-if="task.completed">
                                        <v-list-tile-action>
                                                <v-checkbox 
                                                    v-model="task.completed" 
                                                    color="green"
                                                    @change="saveToLocalStorage()"
                                                ></v-checkbox>
                                            </v-list-tile-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title class="green--text"> {{ task.value }} </v-list-tile-title>
                                            </v-list-tile-content>
                                            <v-list-tile-action>
                                                <v-btn 
                                                    flat icon color="red lighten-2"
                                                    @click="removeTaskHandler(taskList.tasks.indexOf(task))"
                                                >
                                                    <v-icon>clear</v-icon>
                                                </v-btn>
                                            </v-list-tile-action>
                                    </v-list-tile>
                                    <v-divider 
                                        v-if="taskList.tasks.indexOf(task) + 1 < taskList.tasks.length && task.completed"
                                        :key="task.$index"
                                    ></v-divider>
                                </template>
                            </v-list>
                        </v-tab-item>
                    </v-tabs>
                    <v-divider></v-divider>
                </v-card>
                <v-btn 
                    color="success" 
                    round 
                    block 
                    depressed 
                    @click="clearCompleted()"
                > CLEAR COMPLETED </v-btn>
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
            },
            taskList: {
                tasks: [],
            }
        }
    },
    computed:{
        completedTasks(){
            return this.taskList.tasks.filter(task => task.completed).length
        },
        progress(){
            return this.completedTasks / this.taskList.tasks.length * 100;
        }
    },
    methods: {
        saveToLocalStorage(){
            localStorage.setItem('tasks', JSON.stringify(this.taskList.tasks));
        },
        addTaskHandler(){
            this.taskList.tasks.push({value: this.input.newTask, completed: false});
            this.saveToLocalStorage();
            this.input.newTask = '';
        },
        removeTaskHandler(id){
            this.taskList.tasks.splice(id, 1);
            this.saveToLocalStorage();
        },
        clearCompleted(){
            this.taskList.tasks.forEach(task => {
                if (task.completed) {
                    this.taskList.tasks.splice(this.taskList.tasks.indexOf(task), 1);
                }
            })
            // this.saveToLocalStorage();
        }
    },
    created(){
        if (localStorage.getItem('tasks') !== null) {
            this.taskList.tasks = JSON.parse(localStorage.getItem('tasks'))
        }
    }
}
</script>

<style scoped>
</style>

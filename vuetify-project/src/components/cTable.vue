<template>
    <v-card>
        <v-snackbar
            v-model="info.snackbar"
            :bottom="info.y === 'bottom'"
            :left="info.x === 'left'"
            :multi-line="mode === 'multi-line'"
            :right="info.x === 'right'"
            :timeout="info.timeout"
            :top="info.y === 'top'"
            :vertical="info.mode === 'vertical'"
            >
            {{ info.text }}
            <v-btn
                color="pink"
                flat
                @click="info.snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
        <v-data-table 
        :headers="table.headers"
        :items="table.books"
        >
        <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.id }}</td>
            <td class="text-xs-right">{{ props.item.createdAt }}</td>
            <td class="text-xs-right">{{ props.item.description }}</td>
            <v-btn class="text-xs-right" color="red" @click="deleteHandler(props.item.id)">DELETE</v-btn>
        </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    data () {
        return {
            info:{
                snackbar: false,
                y: 'top',
                x: null,
                mode: '',
                timeout: 6000,
                text: 'Element deleted'
            },
            table: {
                headers: [
                {
                    text: 'Name',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'ID', value: 'id' },
                { text: 'Created At', value: 'createdAt' },
                { text: 'Description', value: 'description' },
                { text: 'Delete', sortable: false },
                
                ],
                books:[]
            }
        }
    },
    methods: {
        deleteHandler(id){
            fetch(`http://5c8920a041fb3f001434bd33.mockapi.io/api/books/${id}`, {method: 'DELETE'})
                .then( () => {
                    let index = this.table.books.findIndex(i => i.id === id)
                    this.table.books.splice(index, 1);
                })
                .then( () => {
                    this.info.snackbar = true
                })
                .catch( err => {
                    alert(err);
                })
        }
    },
    beforeCreate(){
        fetch('http://5c8920a041fb3f001434bd33.mockapi.io/api/books')
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.table.books = data
            })
            .catch(err => {
                alert(err);
            })
    }
}
</script>

<style scoped>

</style>

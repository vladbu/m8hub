<template>
    <button @click="incCounter()">
        <slot name="before"> Default text before icon</slot>    
        <v-icon>home</v-icon>
        {{ counter }}
    </button>
</template>

<script>
export default {
    data: () => {
        return {
            counter: 0
        }
    },
    methods: {
        incCounter(){
            this.counter++;
        }
    },
    watch: {
        counter(newVal, oldVal){
            // eslint-disable-next-line 
            console.log('new '+ newVal + ' old ' +  oldVal);
        }
    }
}
</script>

<style scoped>

</style>

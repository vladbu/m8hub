<template>
    <input type="text" v-model="localVal">
</template>

<script>
    export default {
        model: {
            prop: 'inputVal',
            event: 'input'
        },
        props: {
            inputVal: {
                type: String,
            }
        },
        computed: {
            localVal: {
                get(){
                    return this.inputVal
                },
                set() {
                    return this.$emit('input', this.inputVal)
                }
            }
        }     
    }
</script>

<style scoped>
input[type="text"] {
    width: 50%;
}
</style>


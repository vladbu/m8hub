<template>
    <input type="text" :value="localVal">
</template>

<script>
    export default {
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
                    return this.$emit('input', this.localVal)
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


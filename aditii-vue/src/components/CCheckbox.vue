<template>
    <section>
        <input type="checkbox" v-model="localFirst">
        <input type="checkbox" v-model="localSecond">
    </section>
</template>

<script>
export default {
    props: {
        firstCheck: {
            type: Boolean
        },
        secondCheck: {
            type: Boolean
        }
    },
    computed: {
        localFirst: {
            get() {
                return this.firstCheck
            },
            set() {
                return this.$emit('update:firstCheck', !this.firstCheck)
            }
        },
        localSecond: {
            get() {
                return this.secondCheck
            },
            set() {
                return this.$emit('update:secondCheck', !this.secondCheck)
            }
        }
    }
}
</script>

<style scoped>

</style>

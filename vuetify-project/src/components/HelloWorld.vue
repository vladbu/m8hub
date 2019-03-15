<template>
  <v-container>
    <v-layout>
      <v-flex>
        <c-table>

        </c-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import cTable from './cTable.vue'

  export default {
    components: {
      cTable
    },
    data: () => ({
      comps: [`cBtn`, ``]
    }),
    watch: {

    }
  }
</script>

<style>

</style>

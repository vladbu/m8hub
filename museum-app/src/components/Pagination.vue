<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap justify-space-around>
      <v-flex md9>
        <v-pagination light :length="length" v-model="currentPageComp" @input="$emit('update')"/>
      </v-flex>
      <v-flex md2>
        <v-btn-toggle mandatory light v-model="perPageComp" @change="$emit('update')">
          <v-btn>10</v-btn>
          <v-btn>50</v-btn>
          <v-btn>100</v-btn>
        </v-btn-toggle>
      </v-flex>
    </v-layout>
  </v-container>
</template> 

<script>
export default {
  props: {
    perPage: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 1
    },
    length: {
      type: Number,
      default: 50
    }
  },
  computed: {
    perPageComp: {
      get() {
        return this.perPage;
      },
      set(newVal) {
        return this.$emit("update:perPage", newVal);
      }
    },
    currentPageComp: {
      get() {
        return this.currentPage;
      },
      set(newVal) {
        return this.$emit("update:currentPage", newVal);
      }
    }
  },
};
</script>

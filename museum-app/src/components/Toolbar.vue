<template>
  <v-card>
    <v-toolbar app light>
      <div style="width: 20%">
        <v-select
          flat
          solo
          v-model="sortValComp"
          :items="sortItems"
          label="Sort by:"
          class="mt-2"
          @input="$emit('sort')"
        ></v-select>
      </div>
      <v-spacer/>
      <v-text-field
        flat
        solo
        label="Search keyword..."
        append-icon="search"
        class="mt-2"
        style="flex-basis: 70%"
        v-model="searchValComp"
        @click:append="$emit('search')"
        @keydown.enter="$emit('search')"
      />
      <v-spacer/>
      <v-btn flat icon light>
        <v-icon>star</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  props: {
    sortVal: String,
    sortItems: Array,
    searchVal: String
  },
  computed: {
    sortValComp: {
      get() {
        return this.sortVal
      },
      set(newVal) {
        return this.$emit("update:sortVal", newVal)
      }
    },
    searchValComp: {
      get() {
        return this.searchVal;
      },
      set(newVal) {
        return this.$emit("update:searchVal", newVal);
      }
    }
  }
};
</script>

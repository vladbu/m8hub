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
        style="flex-basis: 60%"
        v-model="searchValComp"
        @click:append="$emit('search')"
        @keydown.enter="$emit('search')"
      />
      <v-spacer/>
      <v-btn-toggle v-model="favorites">
        <v-btn flat light @click="$emit('showFav')">Favorites</v-btn>
      </v-btn-toggle>
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
        return this.sortVal;
      },
      set(newVal) {
        return this.$emit("update:sortVal", newVal);
      }
    },
    searchValComp: {
      get() {
        return this.searchValn;
      },
      set(newVal) {
        return this.$emit("update:searchVal", newVal);
      }
    }
  },
  data() {
    return {
      favorites: false
    };
  }
};
</script>

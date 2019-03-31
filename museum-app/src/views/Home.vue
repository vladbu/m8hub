<template>
  <v-container fluid fill-height grid-list-xl>
    <v-layout row wrap>
      <toolbar
        :sortVal.sync="sortVal"
        :sortItems.sync="sortItems"
        @sort="fetchData(sortValComp)"
        :searchVal.sync="searchVal"
        @search="fetchData(searchValComp)"
      />
      <objects-grid class="mt-4" :response.sync="response"/>
      <pagination
        :perPage.sync="perPage"
        :currentPage.sync="currentPage"
        :length.sync="length"
        @update="fetchData(`&p=${currentPage}&ps=${perPageComp}${sortValComp}${searchValComp}${categoryComp}`)"
        @showFav="fetchData(``)"
      />
    </v-layout>
  </v-container>
</template>

<script>
import Toolbar from "../components/Toolbar.vue";
import ObjectsGrid from "../components/ObjectsGrid.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "home",
  components: {
    Toolbar,
    ObjectsGrid,
    Pagination
  },
  computed: {
    sortValComp: {
      get() {
        switch (this.sortVal) {
          case "Relevance":
            return "&s=relevance";
          case "Type":
            return "&s=objecttype";
          case "Chronologic (Oldest First)":
            return "&s=chronologic";
          case "Chronologic (Newest First)":
            return "&s=achronologic";
          case "Artist (a-z)":
            return "&s=artist";
          case "Artist (z-a)":
            return "&s=artistdesc";
          default:
            return "&s=relevance";
        }
      }
    },
    searchValComp: {
      get() {
        if (this.searchVal !== null) {
          return `&q=${this.searchVal}`;
        } else {
          return "";
        }
      }
    },
    categoryComp: {
      get() {
        if (this.$route.query.category) {
          return `&type=${this.$route.query.category}`;
        } else {
          return "";
        }
      }
    },
    perPageComp: {
      get() {
        switch (this.perPage) {
          case 0:
            return 10;
          case 1:
            return 50;
          case 2:
            return 100;
          default:
            return 10;
        }
      }
    }
  },
  data() {
    return {
      sortVal: null,
      sortItems: [
        "Relevance",
        "Type",
        "Chronologic (Oldest First)",
        "Chronologic (Newest First)",
        "Artist (a-z)",
        "Artist (z-a)"
      ],
      searchVal: null,
      perPage: 0,
      currentPage: 1,
      length: 500,
      response: {}
    };
  },
  methods: {
    fetchData(params) {
      fetch(
        `https://www.rijksmuseum.nl/api/en/collection/?key=MCnLgM9h&format=json${params}&imgonly=True`
      )
        .then(response => response.json())
        .then(data => {
          this.response = data;
          if (Math.round(data.count / this.perPageComp) > 1000) {
            this.length = 10000 / this.perPageComp;
          } else {
            this.length = Math.round(data.count / this.perPageComp);
          }
        })
        // eslint-disable-next-line
        .catch(err => console.error(err));
    }
  },
  created() {
    this.fetchData(
      `&p=${this.currentPage}&ps=${this.perPageComp}${this.sortValComp}${
        this.searchValComp
      }${this.categoryComp}`
    );
  }
};
</script>
<template>
  <v-container grid-list-xl>
    <v-card fill-height>
      <v-img :src="artObjImg"/>
      <v-card-title>
        <div>
          <span class="headline">{{ artObjLongTitle }}</span>
          <br>
          <span class="body-2">Description:</span>
          <p class="body-1">{{ artObjDesc }}</p>
          <span class="body-2">Category:</span>
          <template v-for="item in artObjCategory">
            <v-btn
              v-if="item == 'category not avaible'"
              flat
              round
              small
              disabled
              style="text-transform: capitalize"
              :key="item.$index"
            >{{item}}</v-btn>
            <v-btn
              v-else
              flat
              round
              small
              style="text-transform: capitalize"
              color="primary"
              :key="item.$index"
              :to="{path: '/', query: {'category':item}}"
            >{{item}}</v-btn>
          </template>
          <br>
          <span class="body-2">Tags:</span>
          <template v-for="item in artObjTags">
            <v-btn
              v-if="item == 'tags not avaible'"
              flat
              round
              small
              disabled
              style="text-transform: capitalize"
              :key="item.$index"
            >{{item}}</v-btn>
            <v-btn
              v-else
              flat
              round
              small
              style="text-transform: capitalize"
              color="primary"
              :key="item.$index"
              :to="{path: '/', query: {'tag':item}}"
            >#{{item}}</v-btn>
          </template>
          <br>
          <span class="body-2">Additional info:</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn light round>Share</v-btn>
        <v-btn light round to="/">Explore</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      artObjNum: this.$route.params.artObjectLink,
      artObjImg: undefined,
      artObjLongTitle: undefined,
      artObjDesc: undefined,
      artObjCategory: undefined,
      artObjTags: undefined,
      response: {}
    };
  },
  methods: {
    fetchData(artObjNum) {
      fetch(
        `https://www.rijksmuseum.nl/api/en/collection/${artObjNum}?key=MCnLgM9h&format=json`
      )
        .then(response => response.json())
        .then(data => {
          this.response = data;
          this.artObjImg = data.artObject.webImage.url;
          this.artObjLongTitle = data.artObject.longTitle;
          if (data.artObjectPage.plaqueDescription !== null) {
            this.artObjDesc = data.artObjectPage.plaqueDescription;
          } else if (data.artObject.description !== null) {
            this.artObjDesc = data.artObject.description;
          } else {
            this.artObjDesc = "No Description Avaible";
          }
          if (data.artObject.objectTypes.length !== 0) {
            this.artObjCategory = data.artObject.objectTypes;
          } else {
            this.artObjCategory = ["category not avaible"];
          }
          if (data.artObjectPage.tags.length !== 0) {
            this.artObjTags = data.artObjectPage.tags;
          } else {
            this.artObjTags = ["tags not avaible"];
          }
        })
        // eslint-disable-next-line
        .catch(err => console.error(err));
    }
  },
  created() {
    this.fetchData(this.artObjNum);
  }
};
</script>

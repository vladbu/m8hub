<template>
  <v-card>
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs6>
          <v-img :src="image" pl-0/>
        </v-flex>
        <v-flex xs6>
          <div pr-0>
            <h3 class="headline mb-0">{{title}}</h3>
            <div>{{artObjDesc}}</div>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-btn light round color="primary" @click="addToFav(artObjNum)">Mark as favorite</v-btn>
      </v-layout>
      <v-layout row wrap justify-space-between>
        <v-btn light round :to="`/artObject/${artObjNum}`">View more details</v-btn>
        <v-btn light round @click="$emit('close')">Close</v-btn>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    artObjNum: String,
    popUp: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      artObjDesc: undefined
    };
  },
  methods: {
    fetchData(artObjNum) {
      fetch(
        `https://www.rijksmuseum.nl/api/en/collection/${artObjNum}?key=MCnLgM9h&format=json`
      )
        .then(response => response.json())
        .then(data => {
          if (data.artObjectPage.plaqueDescription !== null) {
            this.artObjDesc = data.artObjectPage.plaqueDescription;
          } else if (data.artObject.description !== null) {
            this.artObjDesc = data.artObject.description;
          } else {
            this.artObjDesc = "No Description Avaible";
          }
        })
        // eslint-disable-next-line
        .catch(err => console.error(err));
    },
    addToFav(artObjNum){
      alert(artObjNum)
    }
  },
  created() {
    this.fetchData(this.artObjNum);
  }
};
</script>
<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex xs6 v-for="item in response.artObjects" :key="item.$index">
        <v-hover close-delay="300">
          <v-card slot-scope="{ hover }">
            <v-img :src="item.headerImage.url">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-slow-out grey lighten-4 v-card--reveal"
                  style="height: 60%"
                >
                  <v-card-title
                    primary-title
                    style="cursor: pointer"
                    @click.stop="popUp = true"
                  >{{ item.longTitle }}</v-card-title>
                  <v-dialog
                    persistent
                    v-model="popUp"
                    max-width="80vw"
                    transition="dialog-transition"
                  >
                    <pop-up
                      @close="popUp = false"
                      :title.sync="item.title"
                      :image.sync="item.webImage.url"
                      :artObjNum.sync="item.objectNumber"
                    />
                  </v-dialog>
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-if="this.response.count === 0" text-sm-center>
      <v-flex xs12>
        <span class="headline">No art object could be found by your query</span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PopUp from "./PopUp.vue";

export default {
  components: {
    PopUp
  },
  props: {
    response: {
      type: Object
    }
  },
  data() {
    return {
      popUp: false
    };
  }
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}
</style>

<template>
  <v-flex xs12>
    <v-card flat fluid>
      <v-toolbar flat light>
        <v-toolbar-title>Diagnostics</v-toolbar-title>
        <v-toolbar-title
          class="grey--text text--lighten-1 font-weight-thin"
        >- Details of the performance of your application.</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-expansion-panel light>
          <v-expansion-panel-content
            v-for="obj in diagnostics"
            :key="obj.id"
            expand-icon="arrow_drop_down"
          >
            <template v-slot:header>
              <v-flex xs1>
                <svg
                  v-if="obj.score <= .5 && obj.score !== null"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g
                    id="Rectangle_1472"
                    data-name="Rectangle 1472"
                    fill="rgba(255,101,101,0.2)"
                    stroke="#ff6565"
                    stroke-width="1"
                  >
                    <rect width="16" height="16" rx="5" stroke="none"></rect>
                    <rect x="0.5" y="0.5" width="15" height="15" rx="4.5" fill="none"></rect>
                  </g>
                </svg>
                <svg
                  v-if="obj.score > .5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g
                    id="Rectangle_1475"
                    data-name="Rectangle 1475"
                    fill="rgba(254,193,99,0.2)"
                    stroke="#fec163"
                    stroke-width="1"
                  >
                    <rect width="16" height="16" rx="5" stroke="none"></rect>
                    <rect x="0.5" y="0.5" width="15" height="15" rx="4.5" fill="none"></rect>
                  </g>
                </svg>
                <svg
                  v-if="obj.score === null"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g
                    id="Rectangle_1486"
                    data-name="Rectangle 1486"
                    fill="rgba(184,184,184,0.2)"
                    stroke="#b8b8b8"
                    stroke-width="1"
                  >
                    <rect width="16" height="16" rx="5" stroke="none"></rect>
                    <rect x="0.5" y="0.5" width="15" height="15" rx="4.5" fill="none"></rect>
                  </g>
                </svg>
              </v-flex>
              <v-flex xs5>
                <div>{{ obj.title }}</div>
              </v-flex>
              <v-flex xs6 text-xs-right>
                <span
                  v-if="obj.score <= .5 && obj.score !== null"
                  class="deep-orange--text text--accent-3"
                >- {{obj.displayValue}}</span>
                <span v-if="obj.score > .5" class="amber--text text--darken-1">- {{obj.displayValue}}</span>
                <span
                  v-if="obj.score === null"
                  class="grey--text text--lighten-1"
                >- {{obj.displayValue}}</span>
              </v-flex>
            </template>
            <v-card>
              <v-card-text>{{obj.description}}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    diagnostics: Object
  }
};
</script>


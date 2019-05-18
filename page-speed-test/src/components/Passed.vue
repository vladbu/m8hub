<template>
  <v-flex xs12>
    <v-card flat fluid>
      <v-toolbar flat light>
        <v-toolbar-title>Successful Audits</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-expansion-panel light>
          <v-expansion-panel-content
            v-for="obj in passed"
            :key="obj.id"
            expand-icon="arrow_drop_down"
          >
            <template v-slot:header>
              <v-flex xs1>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <g
                    id="Rectangle_1487"
                    data-name="Rectangle 1487"
                    fill="rgba(94,226,160,0.2)"
                    stroke="#5ee2a0"
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
                <span class="green--text text--accent-3">{{obj.displayValue}}</span>
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
    passed: Object
  }
};
</script>


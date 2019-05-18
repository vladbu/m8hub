<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap justify-center>
      <div v-if="!loaded">
        Loading
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </div>
      <opportunities v-if="loaded" :opportunities="opportunityAudits"/>
      <diagnostics v-if="loaded" :diagnostics="diagnosticAudit"/>
      <passed v-if="loaded" :passed="passedAudits"/>
    </v-layout>
  </v-container>
</template>

<script>
import Opportunities from "../components/Opportunities.vue";
import Diagnostics from "../components/Diagnostics.vue";
import Passed from "../components/Passed.vue";

export default {
  components: {
    Opportunities,
    Diagnostics,
    Passed
  },
  data() {
    return {
      loaded: false,
      response: {},
      audits: {},
      categories: [],
      opportunityAudits: {},
      diagnosticAudit: {},
      passedAudits: {}
    };
  },
  methods: {
    showAsPassed(audit) {
      switch (audit.scoreDisplayMode) {
        case "manual":
        case "notApplicable":
          return true;
        case "error":
        case "informative":
          return false;
        case "numeric":
        case "binary":
        default:
          return Number(audit.score) >= 0.9;
      }
    },
    fetchData() {
      fetch(
        "https://www.googleapis.com/pagespeedonline/v5/runPagespeed/?url=https://habr.com/"
      )
        .then(response => response.json())
        .then(data => {
          this.response = data;
          this.audits = this.response.lighthouseResult.audits;
          this.categories = this.response.lighthouseResult.categories.performance.auditRefs;
          this.categories.forEach(el => {
            for (let key in this.audits) {
              if (
                el.id === this.audits[key].id &&
                el.group === "load-opportunities"
              ) {
                if (this.showAsPassed(this.audits[key])) {
                  this.passedAudits[key] = this.audits[key];
                } else {
                  this.opportunityAudits[key] = this.audits[key];
                }
              } else if (
                el.id === this.audits[key].id &&
                el.group === "diagnostics"
              ) {
                if (this.showAsPassed(this.audits[key])) {
                  this.passedAudits[key] = this.audits[key];
                } else {
                  this.diagnosticAudit[key] = this.audits[key];
                }
              }
            }
          });
        })
        .then(() => {
          this.loaded = true;
        })
        .catch(err => new Error(err));
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

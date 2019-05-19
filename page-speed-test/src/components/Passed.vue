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
              <v-data-table :headers="obj.details.headings" :items="obj.details.items" hide-actions>
                <template v-slot:headers="props">
                  <th
                    v-for="header in props.headers"
                    :key="header.$id"
                  >{{ header.text || header.label}}</th>
                </template>
                <template v-slot:items="props">
                  <td v-if="props.item.isCrossOrigin">
                    <img :src="props.item.url" alt>
                  </td>
                  <td v-if="props.item.url">{{ props.item.url }}</td>
                  <td v-if="props.item.group">{{ props.item.group }}</td>
                  <td v-if="props.item.resourceType">{{ props.item.resourceType }}</td>
                  <td
                    v-if="props.item.requestCount || props.item.requestCount === 0"
                  >{{ props.item.requestCount }}</td>
                  <td v-if="props.item.size || props.item.size === 0">{{ props.item.size }}</td>
                  <td
                    v-if="props.item.cacheLifetimeMs || props.item.cacheLifetimeMs === 0"
                  >{{ props.item.cacheLifetimeMs }}</td>
                  <td
                    v-if="props.item.totalBytes || props.item.totalBytes === 0"
                  >{{ props.item.totalBytes }}</td>
                  <td
                    v-if="props.item.wastedMs || props.item.wastedMs === 0"
                  >{{ props.item.wastedMs }}</td>
                  <td
                    v-if="props.item.duration || props.item.duration === 0"
                  >{{ props.item.duration }}</td>
                  <td v-if="props.item.total || props.item.total === 0">{{ props.item.total }}</td>
                  <td
                    v-if="props.item.scripting || props.item.scripting === 0"
                  >{{ props.item.scripting }}</td>
                  <td
                    v-if="props.item.scriptParseCompile || props.item.scriptParseCompile === 0"
                  >{{ props.item.scriptParseCompile }}</td>
                  <td v-if="props.item.statistic">{{ props.item.statistic }}</td>
                  <td v-if="props.item.element">{{ props.item.element.value }}</td>
                  <td v-if="props.item.value">{{ props.item.value }}</td>
                  <td v-if="props.item.wastedBytes">{{ props.item.wastedBytes }}</td>
                </template>
              </v-data-table>
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


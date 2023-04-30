<template>
  <div>
    <!-- Header -->
    <div class="flex flex-row justify-between items-center mb-8">
      <!-- Page title -->
      <h1 class="text-4xl font-mono italic">Reports</h1>

      <!-- Refresh control -->
      <div class="flex flex-row items-center justify-end">
        <!-- Last update time -->
        <p class="text-sm text-gray-500 mr-4">
          Last updated {{ lastRefreshed.toLocaleString() }}
        </p>

        <!-- Refresh button -->
        <button class="hover:bg-adn-accent p-2 rounded-full active:bg-adn-accent-dark
          focus:outline-none active:ring-4 active:ring-adn-accent transition-colors"
          @click="refreshReports"
        >
          <ArrowPathIcon class="h-6 w-6"
            :class="isRefreshing ? 'animate-spin select-none cursor-not-allowed' : ''"
          />
        </button>
      </div>
    </div>

    <!-- Summary -->
    <div class="grid grid-flow-row grid-cols-3 gap-4 auto-rows-min mb-8">
      <!-- Counts -->
      <div class="col-span-1 row-start-1">
        <p class="text-adn-gray-light mb-2">Total reports</p>
        <h2 class="font-bold font-mono text-3xl">{{ totalReports }}</h2>
      </div>
      <div class="col-span-1 row-start-2">
        <p class="text-adn-gray-light mb-2">Reported sites</p>
        <h2 class="font-bold font-mono text-3xl">{{ numDomains }}</h2>
      </div>

      <!-- Top reported domain -->
      <div class="col-span-2 col-start-2 row-span-2 row-start-1">
        <p class="text-adn-gray-light mb-2">Top reported domain</p>
        <div class="flex flex-row justify-between items-center mb-4">
          <h2 class="font-bold font-mono text-3xl">{{ topDomainName }}</h2>
          <span class="px-4 py-1 font-bold font-mono text-lg
          text-adn-white bg-adn-accent-dark rounded-full"
          >
            {{ topDomainTotal }}
          </span>
        </div>
        <div v-for="stat in topDomainStats"
          :key="stat[0]"
          class="flex flex-row justify-between items-center mb-1"
        >
          <p class="font-bold">{{ stat[0] }}</p>
          <span class="px-3 py-0.5 font-bold font-mono text-xs
          text-adn-white bg-adn-text rounded-full"
          >
            {{ stat[1] }}
          </span>
        </div>
      </div>
    </div>

    <!-- Most recent reports -->
    <p class="text-adn-gray-light mb-4">Most recent reports</p>
    <div class="grid grid-cols-1 auto-rows-min gap-4">
      <div
        v-for="report in mostRecentReports"
        :key="report['id']"
        class="border border-adn-border border-dashed rounded-md w-full p-4
        hover:border-solid hover:border-adn-text transition-colors"
      >
        <span class="block text-adn-accent-dark text-sm font-bold uppercase mb-0.5">
          {{ report['is_custom_type'] ? 'Other' : report['deceptive_design_type'] }}
        </span>
        <h3 class="font-mono mb-3 text-lg">
          <span class="font-bold">{{ report['domain'] }}</span>
          <span class="text-adn-gray">{{ report['path'] }}</span>
        </h3>
        <p class="text-adn-gray text-sm">
          Last reported {{ new Date(report['last_report_timestamp']).toLocaleString() }}
        </p>
        <p class="text-adn-gray text-sm">
          Reported <span class="font-bold">
            {{ report['num_reports'] }} time{{ report['num_reports'] == 1 ? '' : 's' }}
          </span> so far
        </p>
        <p class="text-adn-gray-light mt-4 text-xs">
          Report ID {{ report['id'] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowPathIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

export default defineComponent({
  name: 'HomeView',
  components: {
    ArrowPathIcon,
    ChevronRightIcon
  },
  data() {
    return {
      currentSortingMethod: 'newest',
      isRefreshing: true,
      lastRefreshed: new Date(),
      latestData: null
    }
  },
  setup() {
    const runtimeConfig = useRuntimeConfig()

    return {
      apiUrl: runtimeConfig.public.apiBaseUrl,
      sortingMethods: {
        newest: 'Date, newest',
        oldest: 'Date, oldest',
        popular: 'Most reported'
      }
    }
  },
  async created() {
    this.refreshReports()
  },
  computed: {
    totalReports(): number {
      return this.latestData ? this.latestData['total_reports'] : 0
    },
    numDomains(): number {
      return this.latestData ? this.latestData['num_domains'] : 0
    },
    topDomainName(): string {
      return this.latestData ? this.latestData['top_domain']['domain'] : '(no data)'
    },
    topDomainTotal(): number {
      return this.latestData ? this.latestData['top_domain']['num_reports'] : 0
    },
    topDomainStats(): object {
      return Object.entries(this.latestData ? this.latestData['top_domain']['per_type'] : {
        'Unclear language': 0,
        'Weighted options': 0,
        'Pre-filled options': 0,
        'Other': 0
      })
    },
    mostRecentReports(): object[] {
      return this.latestData ? this.latestData['most_recent_reports'] : []
    }
  },
  methods: {
    refreshReports() {
      this.isRefreshing = true

      // Call API
      fetch(this.apiUrl + '/api/v1/reports')
        .then(response => response.json())
        .then(data => {
          this.latestData = data
          this.isRefreshing = false
          this.lastRefreshed = new Date()
        })
    }
  }
})
</script>

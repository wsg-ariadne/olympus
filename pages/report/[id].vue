<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <!-- Page title and back button -->
      <button
        class="hover:bg-adn-accent p-2 rounded-full active:bg-adn-accent-dark
          focus:outline-none active:ring-4 active:ring-adn-accent transition-colors
          inline-block"
        @click="$router.back()"
      >
        <ArrowLeftIcon class="h-6 w-6" />
      </button>
      <h1 class="text-4xl font-mono italic inline-block ml-4">Report</h1>
    </div>

    <!-- Report details -->
    <div class="grid grid-cols-3 auto-rows-min gap-4">
      <div class="col-span-3">
        <p class="text-sm text-adn-gray-light mb-2">Deceptive design type</p>
        <h2 class="text-2xl font-bold">
          {{ reportType }}
          <TextPill
            class="inline-block align-text-bottom pb-0.5 ml-2"
            small bg-class="bg-adn-text"
            v-show="isCustomReportType"
          >
            custom
          </TextPill>
        </h2>
      </div>
      <div>
        <p class="text-sm text-adn-gray-light mb-2">Domain</p>
        <h2 class="text-xl font-bold">{{ domain }}</h2>
      </div>
      <div class="col-span-2">
        <p class="text-sm text-adn-gray-light mb-2">Path</p>
        <h2 class="text-xl font-bold">
          {{ path }}
          <ArrowTopRightOnSquareIcon
            class="inline-block align-middle ml-2 w-5 h-5 cursor-pointer"
            @click="openSiteInNewTab"
          ></ArrowTopRightOnSquareIcon>
        </h2>
      </div>
      <div>
        <p class="text-sm text-adn-gray-light mb-2">Times reported</p>
        <h2 class="text-xl font-bold">{{ numReports }}</h2>
      </div>
      <div>
        <p class="text-sm text-adn-gray-light mb-2">Latest report</p>
        <h2 class="text-xl font-bold">{{ lastReport }}</h2>
      </div>
      <div>
        <p class="text-sm text-adn-gray-light mb-2">First report</p>
        <h2 class="text-xl font-bold">{{ firstReport }}</h2>
      </div>
      <div class="col-span-3">
        <p class="text-sm text-adn-gray-light mb-2">Report ID</p>
        <h2 class="text-lg font-bold font-mono">{{ reportId }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

export default defineComponent({
  name: 'Report',
  components: {
    ArrowLeftIcon,
    ArrowTopRightOnSquareIcon
  },
  setup() {
    const route = useRoute()
    const runtimeConfig = useRuntimeConfig()

    return {
      apiUrl: runtimeConfig.public.apiBaseUrl,
      reportId: route.params.id
    }
  },
  async created() {
    // Fetch report details from API
    const response = await fetch(this.apiUrl + '/api/v1/reports/by-id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'report_id': this.reportId
      })
    })
    
    // Parse response
    const parsed = await response.json()
    const reportDetails = parsed['report']
    this.domain = reportDetails['domain']
    this.path = reportDetails['path']
    this.isCustomReportType = reportDetails['is_custom_type']
    this.reportType = reportDetails['deceptive_design_type']
    this.numReports = reportDetails['num_reports']
    this.firstReport = new Date(reportDetails['first_report_timestamp']).toLocaleString()
    this.lastReport = new Date(reportDetails['last_report_timestamp']).toLocaleString()
  },
  data () {
    return {
      domain: '',
      path: '',
      isCustomReportType: false,
      reportType: '(loading)',
      numReports: 0,
      firstReport: null,
      lastReport: null,
    }
  },
  methods: {
    openSiteInNewTab() {
      const url = `http://${this.domain}${this.path}`
      window.open(url, '_blank')
    }
  }
})
</script>

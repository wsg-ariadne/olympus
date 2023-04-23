<template>
  <div>
    <!-- Public report dashboard -->
    <h1 class="my-4 text-2xl font-bold">Reports</h1>

    <!-- Dashboard controls -->
    <div class="flex justify-between items-center">
      <!-- Result count -->
      <p>Showing {{ reports.length }} of {{ reports.length }}</p>

      <!-- Dropdown for sorting options -->
      <Dropdown placement="bottom" :text="sortingMethods[currentSortingMethod]">
        <ListGroup>
          <ListGroupItem
            v-for="(label, value) in sortingMethods"
            :key="value"
            class="cursor-pointer"
            @click="currentSortingMethod = value"
          >
            <span>{{ label }}</span>
          </ListGroupItem>
        </ListGroup>
      </Dropdown>
    </div>

    <!-- Report list -->
    <div class="my-4">
      <div
        v-for="report in sortedReports"
        :key="report.id"
        class="flex items-center justify-between border border-gray-200 rounded p-4 mb-4"
      >
        <!-- Report title -->
        <div>
          <h2 class="text-xl font-bold">{{ report.deceptive_design_type }}</h2>
          <p class="text-gray-500">{{ report.domain }}</p>
        </div>

        <!-- Report count -->
        <div class="flex items-center">
          <p class="text-gray-500 mr-2">{{ report.num_reports }} reports</p>
          <ChevronRightIcon class="h-6 w-6 text-gray-500" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

export default defineComponent({
  name: 'HomeView',
  components: {
    ChevronRightIcon
  },
  data() {
    return {
      currentSortingMethod: 'newest',
      reports: []
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
    // Call API
    fetch(this.apiUrl + '/api/v1/reports')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.reports = data.reports
      })
  },
  computed: {
    sortedReports() {
      return this.reports.sort((a, b) => {
        if (this.currentSortingMethod === 'newest') {
          return new Date(b.last_report_timestamp) - new Date(a.last_report_timestamp)
        } else if (this.currentSortingMethod === 'oldest') {
          return new Date(a.last_report_timestamp) - new Date(b.last_report_timestamp)
        } else if (this.currentSortingMethod === 'popular') {
          return b.num_reports - a.num_reports
        }
      })
    }
  }
})
</script>

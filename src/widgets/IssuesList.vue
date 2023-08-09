<template>
  <cds-table
    hoverable
    selectable
    autoWidth
    borderless
    hideHeader
    rowSize="short"
    name="table"
    :columns="columns"
    :data="rows"
  >
    <template #footer>
      <cds-table-footer>
        <template #pagination>
          <cds-pagination :perPage="10" :count="1000" />
        </template>
        <template #summary> Отображено 5 из 24 </template>
        <template #view>
          <span>На странице</span>
          <cds-select
            label=""
            value="5"
            :options="[
              { value: 5, text: '5' },
              { value: 10, text: '10' }
            ]"
          />
        </template>
      </cds-table-footer>
    </template>
  </cds-table>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useIssuesStore } from '../entities/issues/model/store'

const issuesStore = useIssuesStore()

const rows = computed(() => issuesStore.getIssues)
const columns = [
  {
    title: 'Issue',
    key: 'title',
    width: 130,
    dataIndex: 'title'
  }
]

const getData = async () => {
  await issuesStore.fetchIssues()
}

onMounted(() => getData())
</script>

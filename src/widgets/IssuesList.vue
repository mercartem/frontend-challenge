<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useIssuesStore } from '../entities/issues/model/store'
import type { NTable, ITableProps } from '@central-design-system/components'

type TDataType = {
  key: number
  id: number
  title: string
  state: string
  comments: number
  labels: Array<{ name: string; color: string }>
}

const issuesStore = useIssuesStore()
const isLoading = ref(false)
const columns: NTable.NColumn.TColumns<TDataType> = [
  {
    title: 'Open issue',
    dataIndex: 'title',
    sorter: (a: TDataType, b: TDataType) => a.title.length - b.title.length,
    sortDirections: ['descend']
  },
  {
    title: 'Labels',
    dataIndex: 'labels',
    defaultSortOrder: 'descend',
    sorter: (a: TDataType, b: TDataType) => a.labels.length - b.labels.length,
    align: 'center'
  },
  {
    title: 'Comments',
    dataIndex: 'comments',
    sorter: (a: TDataType, b: TDataType) => a.comments - b.comments,
    sortDirections: ['descend', 'ascend'],
    align: 'right'
  }
]

const rows = computed(() => issuesStore.getIssues)

const getData = async () => {
  try {
    isLoading.value = true
    await issuesStore.fetchIssues()
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

const onChange: ITableProps<TDataType>['onChange'] = (pagination, filters, sorter) => {
  console.log('onChange', pagination, filters, sorter)
}

onMounted(() => getData())
</script>

<template>
  <cds-table :columns="columns" :data="rows" @change="onChange" hovered tableLayout="auto">
    <template #bodyCell="props">
      <template v-if="props.column.dataIndex === 'labels'">
        <span v-for="label in props.record.labels" :key="label.name">
          <cds-tag :text="label.name" :color="label.color" />
        </span>
      </template>
      <template v-else-if="props.column.dataIndex === 'comments'">
        <cds-button size="xs" style="background-color: gray; border-color: gray">
          <template #prepend>
            <cds-icon name="comment" />
          </template>
          <template #append>
            <cds-badge :count="props.record.comments" />
          </template>
        </cds-button>
      </template>
    </template>
  </cds-table>
</template>

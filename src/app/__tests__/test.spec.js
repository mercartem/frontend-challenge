import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '../App.vue'
import { useIssuesStore } from '../../entities/issues/model/store'
import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IssuesList from '@/widgets/IssuesList.vue'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

describe('issues store', () => {
  const store = useIssuesStore()

  it('should fetch issues', async () => {
    await store.fetchIssues()
    expect(store.getIssues.length).toBeGreaterThan(0)
  })

  it('should get current issue', async () => {
    await store.fetchIssues()
    const issue = store.getIssues[0]
    store.setCurrentIssue(issue)
    expect(store.getCurrentIssue).toEqual(issue)
  })

  it('should delete issue', async () => {
    await store.fetchIssues()
    const issue = store.getIssues[0]
    store.deleteCurrentIssue()
    expect(store.getCurrentIssue).not.toContain(issue)
  })

  it('should delete issues', async () => {
    await store.fetchIssues()
    store.deleteIssues()
    expect(store.getIssues.length).toBeLessThan(1)
  })
})

describe('issues list', () => {
  const issuesStore = useIssuesStore()
  const wrapper = mount(IssuesList)

  it('should fetch issues on mount', async () => {
    await issuesStore.fetchIssues()
    expect(wrapper.vm.rows.length).toBeGreaterThan(0)
  })
})

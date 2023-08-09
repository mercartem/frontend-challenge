import { octokit } from '@/shared/api/octocit'
import { defineStore } from 'pinia'

export const useIssuesStore = defineStore({
  id: 'issues',
  state: () => ({
    issues: [] as Array<{
      key: number
      id: number
      title: string
      state: string
      comments: number
      labels: Array<{ name: string; color: string }>
    }>,
    currentIssue: {}
  }),
  getters: {
    getIssues: (state) => state.issues,
    getCurrentIssue: (state) => state.currentIssue
  },
  actions: {
    async fetchIssues() {
      try {
        const { data } = await octokit.request('GET /repos/{owner}/{repo}/issues', {
          owner: 'vuejs',
          repo: 'vue',
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        })
        this.issues = data.map((issue, idx) => ({
          key: idx,
          id: issue.id,
          title: issue.title,
          state: issue.state,
          comments: issue.comments,
          labels: issue.labels.map((label) => ({
            color: typeof label === 'object' && label.color ? label.color : '',
            name: typeof label === 'object' && label.name ? label.name : ''
          }))
        }))
      } catch (error) {
        console.error(error)
      }
    }
  }
})

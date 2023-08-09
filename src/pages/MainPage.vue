<script setup lang="ts">
import MainFooter from '@/widgets/MainFooter.vue'
import MainHeader from '@/widgets/MainHeader.vue'
import IssuesList from '../widgets/IssuesList.vue'
</script>

<template>
  <div>
    <main-header />
    <main>
      <issues-list />
    </main>
    <main-footer />
  </div>
</template>

<style scoped>
main {
  margin-top: 60px;
  padding: 20px;
}
</style>

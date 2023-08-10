<script setup lang="ts">
import MainFooter from '@/widgets/MainFooter.vue'
import MainHeader from '@/widgets/MainHeader.vue'
import IssuesList from '../widgets/IssuesList.vue'
</script>

<template>
  <div class="container">
    <main-header />
    <main>
      <issues-list />
    </main>
    <main-footer />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  margin: 20px;
}

@media (max-width: 320px) {
  .container {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>

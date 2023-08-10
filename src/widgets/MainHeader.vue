<template>
  <header class="cyan-animate-gradient-bg">
    <div class="logo">GitHub Issues</div>
  </header>
</template>

<style>
header {
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.cyan-animate-gradient-bg {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.cyan-animate-gradient-bg:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -5;
  background: #0097a7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #0097a7,
    #00bcd4,
    #00acc1
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    125deg,
    #0097a7,
    #00acc1,
    rgba(0, 188, 212, 0.99),
    #0097a7,
    #00bcd4,
    #0097a7,
    #00acc1,
    rgba(0, 188, 212, 0.99),
    #0097a7,
    #00bcd4
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /*animation: background 18s infinite linear;*/
  animation: gradient 18s infinite cubic-bezier(0.68, 0.27, 0.33, 0.8);
  background-size: 400%;
}
</style>

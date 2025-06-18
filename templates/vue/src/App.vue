<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div class="app">
    <TheHeader />
    <main>
      <RouterView />
    </main>
    <footer>
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} Vue Template. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #42b883;
  --secondary-color: #35495e;
  --background-color: #f8f9fa;
  --text-color: #333;
  --light-color: #fff;
  --dark-color: #212529;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

main {
  min-height: calc(100vh - 140px);
}

footer {
  background-color: var(--secondary-color);
  color: var(--light-color);
  padding: 20px 0;
  text-align: center;
}
</style> 
<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header>
    <nav>
      <div class="container">
        <div class="logo">
          <RouterLink to="/">Vue Template</RouterLink>
        </div>
        
        <button class="menu-toggle" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul :class="{ 'active': isMenuOpen }">
          <li><RouterLink to="/" @click="isMenuOpen = false">Home</RouterLink></li>
          <li><RouterLink to="/about" @click="isMenuOpen = false">About</RouterLink></li>
          <li><RouterLink to="/services" @click="isMenuOpen = false">Services</RouterLink></li>
          <li><RouterLink to="/contact" @click="isMenuOpen = false">Contact</RouterLink></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: var(--light-color);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

nav {
  padding: 20px 0;
}

nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
}

ul {
  display: flex;
  list-style: none;
}

li {
  margin-left: 20px;
}

li a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s;
}

li a:hover, 
li a.router-link-active {
  color: var(--primary-color);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: var(--text-color);
  border-radius: 3px;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }
  
  ul {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--light-color);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    display: none;
    padding: 20px 0;
  }
  
  ul.active {
    display: flex;
  }
  
  li {
    margin: 10px 20px;
  }
}
</style> 
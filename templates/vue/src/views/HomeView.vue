<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <h1>Welcome to Vue Template</h1>
        <p>A modern Vue.js application to kickstart your next project</p>
        <RouterLink to="/about" class="btn">Learn More</RouterLink>
      </div>
    </section>
    
    <section class="features">
      <div class="container">
        <h2 class="section-title">Key Features</h2>
        
        <div class="row">
          <div class="col">
            <div class="card">
              <h3>Vue 3 Composition API</h3>
              <p>Built with the latest Vue 3 and Composition API for better organization and reusability.</p>
            </div>
          </div>
          
          <div class="col">
            <div class="card">
              <h3>Vite Build Tool</h3>
              <p>Lightning fast development experience with hot module replacement and optimized builds.</p>
            </div>
          </div>
          
          <div class="col">
            <div class="card">
              <h3>Vue Router</h3>
              <p>Integrated routing for single page applications with code-splitting for better performance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="cta">
      <div class="container">
        <h2>Ready to Get Started?</h2>
        <p>Check out our services or contact us for more information.</p>
        <div class="buttons">
          <RouterLink to="/services" class="btn">Our Services</RouterLink>
          <RouterLink to="/contact" class="btn btn-outline">Contact Us</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  padding: 100px 0;
  text-align: center;
  background-color: var(--light-color);
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--secondary-color);
}

.hero p {
  font-size: 1.2rem;
  color: var(--secondary-color);
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.features {
  background-color: var(--background-color);
  padding: 80px 0;
}

.cta {
  background-color: var(--secondary-color);
  color: var(--light-color);
  text-align: center;
  padding: 80px 0;
}

.cta h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.cta p {
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero p {
    font-size: 1rem;
  }
  
  .buttons {
    flex-direction: column;
    max-width: 200px;
    margin: 0 auto;
  }
}
</style> 
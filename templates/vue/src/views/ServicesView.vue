<template>
  <div class="services">
    <section class="page-header">
      <div class="container">
        <h1>Our Services</h1>
      </div>
    </section>
    
    <section class="services-list">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card">
              <h3>Web Development</h3>
              <p>Our team delivers high-quality web applications using the latest technologies and best practices.</p>
            </div>
          </div>
          
          <div class="col">
            <div class="card">
              <h3>Mobile Applications</h3>
              <p>We create responsive and native mobile applications for iOS and Android platforms.</p>
            </div>
          </div>
          
          <div class="col">
            <div class="card">
              <h3>UI/UX Design</h3>
              <p>Our design team creates beautiful, intuitive interfaces that enhance user experience.</p>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col">
            <div class="card">
              <h3>E-commerce Solutions</h3>
              <p>We build secure, scalable online stores that help businesses reach more customers.</p>
            </div>
          </div>
          
          <div class="col">
            <div class="card">
              <h3>SEO Optimization</h3>
              <p>Improve your site's visibility and ranking with our SEO optimization services.</p>
            </div>
          </div>
          
          <div class="col">
            <div class="card">
              <h3>Maintenance & Support</h3>
              <p>We provide ongoing maintenance and technical support for all our projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  background-color: var(--secondary-color);
  color: var(--light-color);
  padding: 60px 0;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  margin: 0;
}

.services-list {
  padding: 80px 0;
}

.services-list .row {
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .page-header {
    padding: 40px 0;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
}
</style> 
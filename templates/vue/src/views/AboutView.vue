<template>
  <div class="about">
    <section class="page-header">
      <div class="container">
        <h1>About Us</h1>
      </div>
    </section>
    
    <section class="content">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2>Our Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna ultrices ultricies. Vivamus auctor, libero eget tincidunt fringilla, nibh nunc viverra velit, vel ultricies urna magna vel est.</p>
            <p>Suspendisse potenti. Donec auctor, metus eget ultrices consequat, sem elit vehicula urna, eget efficitur nisl nisl eget nisi. Phasellus nec purus sit amet est volutpat venenatis.</p>
          </div>
          
          <div class="col">
            <div class="card">
              <h3>Our Mission</h3>
              <p>Praesent tempus nulla id diam rutrum, nec elementum nisl tempus. Cras vel tristique massa, in placerat dolor. Nulla facilisi. Suspendisse potenti.</p>
            </div>
            
            <div class="card">
              <h3>Our Vision</h3>
              <p>Etiam convallis, risus eget facilisis tincidunt, lorem orci tempus arcu, vel imperdiet nisi magna vel est. Cras ut malesuada magna, sed cursus est.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="team">
      <div class="container">
        <h2 class="section-title">Our Team</h2>
        
        <div class="row">
          <div class="col">
            <div class="team-member">
              <div class="avatar"></div>
              <h3>John Doe</h3>
              <p class="position">CEO & Founder</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          
          <div class="col">
            <div class="team-member">
              <div class="avatar"></div>
              <h3>Jane Smith</h3>
              <p class="position">CTO</p>
              <p>Praesent tempus nulla id diam rutrum, nec elementum nisl tempus.</p>
            </div>
          </div>
          
          <div class="col">
            <div class="team-member">
              <div class="avatar"></div>
              <h3>Mike Johnson</h3>
              <p class="position">Lead Developer</p>
              <p>Etiam convallis, risus eget facilisis tincidunt.</p>
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

.content {
  padding: 80px 0;
}

.content h2 {
  color: var(--secondary-color);
  margin-bottom: 30px;
}

.team {
  background-color: var(--background-color);
  padding: 80px 0;
}

.team-member {
  text-align: center;
  padding: 20px;
  background-color: var(--light-color);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.team-member:hover {
  transform: translateY(-10px);
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: var(--primary-color);
  margin: 0 auto 20px;
}

.position {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .page-header {
    padding: 40px 0;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .team-member {
    margin-bottom: 20px;
  }
}
</style> 
function About() {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
        </div>
      </section>
      
      <section className="content">
        <div className="container">
          <div className="grid-container">
            <div className="grid-item">
              <h2>Our Story</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna ultrices ultricies. Vivamus auctor, libero eget tincidunt fringilla, nibh nunc viverra velit, vel ultricies urna magna vel est.</p>
              <p>Suspendisse potenti. Donec auctor, metus eget ultrices consequat, sem elit vehicula urna, eget efficitur nisl nisl eget nisi. Phasellus nec purus sit amet est volutpat venenatis.</p>
            </div>
            
            <div className="grid-item">
              <div className="card">
                <h3>Our Mission</h3>
                <p>Praesent tempus nulla id diam rutrum, nec elementum nisl tempus. Cras vel tristique massa, in placerat dolor. Nulla facilisi. Suspendisse potenti.</p>
              </div>
              
              <div className="card">
                <h3>Our Vision</h3>
                <p>Etiam convallis, risus eget facilisis tincidunt, lorem orci tempus arcu, vel imperdiet nisi magna vel est. Cras ut malesuada magna, sed cursus est.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="team">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          
          <div className="grid-container three-columns">
            <div className="team-member">
              <div className="avatar"></div>
              <h3>John Doe</h3>
              <p className="position">CEO & Founder</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            
            <div className="team-member">
              <div className="avatar"></div>
              <h3>Jane Smith</h3>
              <p className="position">CTO</p>
              <p>Praesent tempus nulla id diam rutrum, nec elementum nisl tempus.</p>
            </div>
            
            <div className="team-member">
              <div className="avatar"></div>
              <h3>Mike Johnson</h3>
              <p className="position">Lead Developer</p>
              <p>Etiam convallis, risus eget facilisis tincidunt.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 
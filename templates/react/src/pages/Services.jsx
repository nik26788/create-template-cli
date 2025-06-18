function Services() {
  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
        </div>
      </section>
      
      <section className="services-list">
        <div className="container">
          <div className="grid-container">
            <div className="card">
              <h3>Web Development</h3>
              <p>Our team delivers high-quality web applications using the latest technologies and best practices.</p>
            </div>
            
            <div className="card">
              <h3>Mobile Applications</h3>
              <p>We create responsive and native mobile applications for iOS and Android platforms.</p>
            </div>
            
            <div className="card">
              <h3>UI/UX Design</h3>
              <p>Our design team creates beautiful, intuitive interfaces that enhance user experience.</p>
            </div>
          </div>
          
          <div className="grid-container">
            <div className="card">
              <h3>E-commerce Solutions</h3>
              <p>We build secure, scalable online stores that help businesses reach more customers.</p>
            </div>
            
            <div className="card">
              <h3>SEO Optimization</h3>
              <p>Improve your site's visibility and ranking with our SEO optimization services.</p>
            </div>
            
            <div className="card">
              <h3>Maintenance & Support</h3>
              <p>We provide ongoing maintenance and technical support for all our projects.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services; 
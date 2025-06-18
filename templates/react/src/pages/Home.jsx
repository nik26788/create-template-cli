import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1>Welcome to React Template</h1>
          <p>A modern React application to kickstart your next project</p>
          <Link to="/about" className="btn">Learn More</Link>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          
          <div className="grid-container">
            <div className="card">
              <h3>React 18</h3>
              <p>Built with the latest React version with all new features and improvements.</p>
            </div>
            
            <div className="card">
              <h3>Vite Build Tool</h3>
              <p>Lightning fast development experience with hot module replacement and optimized builds.</p>
            </div>
            
            <div className="card">
              <h3>React Router</h3>
              <p>Seamless client-side routing with React Router for smooth navigation and page transitions.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Explore our services or get in touch with us for more information.</p>
          <div className="buttons">
            <Link to="/services" className="btn">Our Services</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 
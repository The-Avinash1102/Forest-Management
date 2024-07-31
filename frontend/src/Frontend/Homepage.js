import React from 'react';
// import HandleNav from './Navigation'
import { Link } from 'react-router-dom';
import './style.css'
import Top from './Top';
// import logo from './logo.png';
// import forestImage from './images/forest-management image.jpg';
function HomePage() {
  return (
    <>
    
      <div className='home-container'>
        <Top />
      <section className="hero">
          <div className="hero-content">
            <h2>Greenify</h2>
            <p>Embrace Nature's Harmony: Greenify Connects You to the Forest Ecosystem...</p>
          </div>
        </section>


        <section className='first-section'>
        <section className="about">
          <div className="about-text">
            <h2>Simplify forest management with our comprehensive database system.</h2>
            <div className='blank'></div>
            <p>Greenify supports sustainable forest management through inventory, logging, and conservation efforts..</p>
            <div className="about-image">
              <img src="images\forest-management image.jpg" alt="Forest Management Image" />
            </div>
          </div>
          
        </section>


        <section className="features">
          <div className="features-container">
            <div className="feature">
              
              <h2>Effortless Data Management</h2>
              <p>Our system makes it easy to track and manage all of your forest data, enring that you have the information you need to make informed decisions.</p>
            <img src="images\data-icon.jpg" alt="Data Icon" />
            </div>
          </div>
          {/* <h2>Discover the Power of Greenify</h2> */}
        </section>
        </section>


        <section className='cta-section'>
          <div className='cta-section-heading'></div>
          <div className='discover'><h2>Discover</h2>
            <p>Browse our extensive database of plants and animals, complete with images, descriptions, and habitats.</p>
            <div className='discover-btn'>
              <Link to={'/forest-page/'}><button>Plants</button></Link>
              <Link to={'/animal-page/'}><button>Animals</button></Link>
            </div>
          </div>
          <div className='visit'><h2>Visit</h2>
            <p>Plan your next adventure in the forest, with information on trails, recreational activities, and safety guidelines.</p>
            <div className='visit-btn'>
              <Link to={'/visitor-page/'}><button>Visit</button></Link>
            </div>
          </div>
          <div className='contribute'><h2>Contribute</h2>
            <p>Introduce new species, share your observations, and help us grow our knowledge of the forest ecosystem.</p>
            <div className='contribute-btn'>
              <Link to={'/edit-forest/'}><button>Plants</button></Link>
              <Link to={'/edit-animal/'}><button>Animals</button></Link>
            </div>
          </div>
        </section>
        <center>
        <section className="explore"><div className='explore-text'>
          <h2>Explore the Wonders of the Forest</h2>
          <p>Get to know the forest like never before with our interactive tools and features.</p>
          
          </div> 
          <div className="explore-container">
            <div className="explore-item">
              <img src="images\plant-species.jpg" alt="Plant Species Icon" />
              <h3>Plant Species Management Simplified</h3>
              <p>Identify and manage plant species with ease, ensuring the diversity and health of your forest's ecosystem.</p>
            </div>
            <div className="explore-item">
              <img src="images\animal-species.jpg" a  lt="Visitor Experience Icon" />
              <h3>Enhance Visitor Experience</h3>
              <p>Provide visitors with an unforgettable experience, while promoting education and conservation.</p>
            </div>
          </div>
        </section></center>

        <section className="gallery">
          <h2>Forest Gallery</h2>
          <div className="gallery-container">
            <div className="gallery-image">
              <img src="images\forest-gallery-1.jpg" alt="Forest Image 1" />
            </div>
            <div className="gallery-image">
              <img src="images\forest-gallery-2.jpg" alt="Forest Image 2" />
            </div>
            <div className="gallery-image">
              <img src="images\forest-gallery-3.jpg" alt="Forest Image 3" />
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default HomePage;
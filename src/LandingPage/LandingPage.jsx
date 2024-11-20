
import { Container } from 'react-bootstrap';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./LandingPage.css";
import React, { useState } from "react";

const LandingPage = () => {

    const [activeCard, setActiveCard] = useState(1); 

    const cards = [
      {
        id: 1,
        title: "Spotlight",
        title2: "Showcases",
        description: "Step into the limelight! Showcase your work with a personalized profile, get featured, and join regular community events.",
        image: "/Images/artist-icon.png",
      },
      {
        id: 2,
        title: "Creative",
        title2:"Collab",
        description: "Create together, grow together. Connect with like-minded artists, dive into new genres, and collaborate to make art that breaks boundaries.",
        image: "/Images/collab-icon.png",
      },
      {
        id: 3,
        title: "Events",
        title2:"Exposure",
        description: "Your stage awaits! From virtual concerts to art exhibitions, join events that bring your art to audiences who'll love what you create.",
        image: "/Images/event-icon.png",
      },
    ];
  
  return (
    <div>
      <div className="page-wrapper landing-page">
        <Navbar expand="lg" className="navbar">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-center w-100">
                <Nav.Link href="/" className="nav-item">
                  Home
                </Nav.Link>
                <Nav.Link href="#aboutUs" className="nav-item">
                  About Us
                </Nav.Link>
                <Nav.Link href="#contactUs" className="nav-item">
                  Contact Us
                </Nav.Link>
                <Nav.Link href="/login" className="nav-item">
                Register/Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <main>
        <Container className="main-container">
          <Row className="section1">
            <Col sm={12} md={6} className="left-col">
              <h1>Indie</h1>
              <h1>Fusion</h1>
              <p>"Where Creativity Finds Its Rhythm"</p>
            </Col>
            <Col sm={12} md={6} className="right-col">
              <img src="/Images/Image1.png" alt="Hero Image" />
            </Col>
          </Row>
          
          <Row className="section1 section2" id="aboutUs">
            <h1>Where Creators Connect?</h1>
            <Col sm={12} md={6} className="right-col">
              <img src="/Images/collab.png" alt="About Image" />
            </Col>
            <Col sm={12} md={6} className="left-col">
              <p>Welcome to Indie Fusion Artist, where creative souls come together to craft something extraordinary! 
                Our platform is more than just a space—it's a movement for artists who want to blend genres, break boundaries, and create art that's as unique as they are.
                </p>
            </Col>
            
          </Row>

          <Row className="cards-section section1 section3">
            <h1>What We Offer</h1>
            {cards.map((card) => (
              <Col
                key={card.id}
                md={4}
                className={`card-col ${activeCard === card.id ? "active-card" : ""}`}
                onClick={() => setActiveCard(card.id)}
              >
                <div className="card">
                  <img src={card.image} alt={card.title} className="card-image" />
                  <h3>{card.title} <span>{card.title2}</span></h3>
                  <p>{card.description}</p>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="section1 section2">
            <h1>Our Mission - Connect. Create. Inspire.</h1>
            
            <Col sm={12} md={6} className="left-col">
              <p>At Indie Fusion, we're all about lifting up independent artists with a space to connect, create, and conquer. Here, you're not just sharing your art—you.re joining a movement. Showcase your talents, team up with fellow visionaries, and tap into resources to fuel your craft. This is your hub for breaking molds, blending genres, and reaching audiences craving something bold and original.
</p>
            </Col>
            <Col sm={12} md={6} className="right-col">
              <img src="/Images/mission2.png" alt="About Image" />
            </Col>
          </Row>

           

            
        </Container>
        </main>
        <footer>
            <Container fluid className="footer">
            <Container>
              <Row className='socialIcon'>
                <Col md={4} id="contactUs">
                <p>Contact Us <br/> <a href="mailto:admin@gmail.com">admin@gmail.com</a></p>
                </Col>
                <Col md={4}><ul>
                <li>
                      <a href="https://www.facebook.com"
                        ><i class="fab fa-facebook-f"></i
                      ></a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com"
                        ><i class="fab fa-linkedin"></i
                      ></a>
                    </li>
                    <li>
                      <a href="https://www.whatsapp.com"
                        ><i class="fab fa-whatsapp"></i
                      ></a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com"
                        ><i class="fab fa-twitter"></i
                      ></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com"
                        ><i class="fab fa-instagram"></i
                      ></a>
                    </li>
                </ul>
                </Col>
              <Col md={4}>
              <ul>
                <li><a href="#"></a>Privacy Policy</li>
                <span> | </span>
                <li><a href="#"></a>Terms and Condition</li>
              </ul>
              </Col>
              </Row>
              <Row>
              <p>
              &copy; Copyright ~ Team 1</p>
            </Row>
            </Container>
            
            </Container>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;

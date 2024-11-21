import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./LandingPage.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const abc = '/Images/Images_landing/artist-icon.png';

const LandingPage = () => {

    const [activeCard, setActiveCard] = useState(2); 

    const cards = [
      {
        id: 1,
        title: "Spotlight Showcases",
        description: "Step into the limelight! Showcase your work with a personalized profile, get featured, and join regular community events.",
        image: abc,
      },
      {
        id: 2,
        title: "Creative Collab",
        description: "Create together, grow together. Connect with like-minded artists, dive into new genres, and collaborate to make art that breaks boundaries.",
        image: "/Images/Images_landing/collab-icon.png",
      },
      {
        id: 3,
        title: "Events Exposure",
        description: "Your stage awaits! From virtual concerts to art exhibitions, join events that bring your art to audiences who'll love what you create.",
        image: "/Images/Images_landing/event-icon.png",
      },
    ];
  
  return (
    <div>
      <div className="page-wrapper">
        <Navbar expand="lg" className="navbar">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-center w-100">
                <Nav.Link href="#home" className="nav-item">
                  Home
                </Nav.Link>
                <Nav.Link href="#link" className="nav-item">
                  About Us
                </Nav.Link>
                <Nav.Link href="#link" className="nav-item">
                  Contact Us
                </Nav.Link>
                <Nav.Link href="" className="nav-item">
                  Sign Up
                </Nav.Link>
                <NavLink to={'/login'} className="nav-item">
                  Sign In
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="main-container">
          <Row className="section1">
            <Col sm={12} md={6} className="left-col">
              <h1>Indie</h1>
              <h1>Fusion</h1>
              <p>"Where Creativity Finds Its Rhythm"</p>
            </Col>
            <Col sm={12} md={6} className="right-col">
              <img src="/Images/Images_landing/Image1.png" alt="Hero Image" />
            </Col>
          </Row>
          
          <Row className="section1 section2">
            <h1>Where Creators Connect?</h1>
            <Col sm={12} md={6} className="right-col">
              <img src="/Images/Images_landing/collab.png" alt="About Image" />
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
                  <h3>{card.title}</h3>
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
              <img src="/Images/Images_landing/mission2.png" alt="About Image" />
            </Col>
          </Row>

        </Container>
      </div>
    </div>
  );
};

export default LandingPage;

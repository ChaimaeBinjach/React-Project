import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate= useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-1 mb-4">Welcome to My Project</h1>
        <h2 className="display-4 mb-4">Shiny</h2>
        <p className="lead mb-4">Fast, flexible, and easy to use data management for modern web</p>
        <Button onClick={() =>navigate(`/customers`)} variant="primary" className="btn-lg px-5">Get Started</Button>
        
      </div>
    </Container>
  );
};

export default LandingPage;

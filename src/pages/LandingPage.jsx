import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const LandingPage = () => {
  return (
    <div>
        <Container>
          <h1>Welcome to Your Project</h1>
          <p>
            This is a sample landing page for your project using React Bootstrap. Customize it to fit your needs.
          </p>
          <p>
            <Button variant="primary">Get Started</Button>
          </p>
        </Container>

      <Container>
        <h2>About</h2>
        <p>
          Add some information about your project here. Explain what it does, its key features, and why users should choose
          it. Keep it concise and engaging.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          {/* Add more features as needed */}
        </ul>

        <h2>Get Started</h2>
        <p>
          Describe how users can get started with your project. Provide clear instructions or steps they need to follow.
        </p>

        <h2>Contact</h2>
        <p>
          Provide contact information for users to get in touch with you if they have any questions or need support.
        </p>
      </Container>
    </div>
  );
};

export default LandingPage;

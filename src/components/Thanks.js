import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Thanks(props) {
  return (
    <div className="container">
      <Card className="text-center">
        <Card.Header>THANKING YOU!!</Card.Header>
        <Card.Body>
          <Card.Title>We are grateful for purchasing product</Card.Title>
          <Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            ipsam.
          </Card.Text>
          <Button variant="danger">Subscribe</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Thanks;

// const Thanks = () => {
//   return
//    <div className="submit">Thanks for ordering!!</div>;
// };

// export default Thanks;

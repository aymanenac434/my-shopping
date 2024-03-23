import React from "react";
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import product from "./product";

const App = () => {
  const firstName = "Serab"; // Replace with your first name

  return (
    <div>
      <Card style={{ width: "18rem", margin: "auto", marginTop: "20px" }}>
        <Card.Body>
          <Image image={product.image} />
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </p>
      {firstName && <Image image={product.image} />}
    </div>
  );
};

export default App;

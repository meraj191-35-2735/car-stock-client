import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const Car = ({ car }) => {
  const { _id, name, description, price, quantity, image } = car;
  const navigate = useNavigate();
  const handleUpdate = () => {
    navigate(`/car_details/${_id}`);
  };
  return (
    <div className="col-4">
      <Card style={{ backgroundColor: "#f5f5f5" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 150) + "..."}</Card.Text>
          <div className="d-flex justify-content-between">
            <div>
              <p>Price: ${price}</p>
            </div>
            <div>
              <p>Quantity: {quantity}</p>
            </div>
          </div>
          <Button variant="dark" onClick={handleUpdate}>
            Update
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Car;

import React, { useEffect, useRef, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CarDetails = () => {
  const [findCar, setFindCar] = useState([]);
  const reStockRef = useRef();
  const { carId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://enigmatic-sands-33985.herokuapp.com/cars/${carId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFindCar(data));
  }, []);
  const handleRestockProduct = (event) => {
    event.preventDefault();
    const inputQuantityText = reStockRef.current.value;
    const inputQuantity = parseInt(inputQuantityText);
    const updatedQuantity = inputQuantity + findCar.quantity;
    findCar.quantity = updatedQuantity;
    const url = `https://enigmatic-sands-33985.herokuapp.com/cars/${findCar._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(findCar),
    })
      .then((response) => response.json())
      .then((data) => {
        toast("The quantity updated successfully");
      });
  };

  const handleNavigateCheckout = () => {
    navigate("/checkout");
  };
  const handleNavigateDeliver = (car) => {
    const remainingQuantity = car.quantity - 1;
    findCar.quantity = remainingQuantity;
    const url = `https://enigmatic-sands-33985.herokuapp.com/cars/${car._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(findCar),
    })
      .then((response) => response.json())
      .then((data) => {
        toast("The quantity updated successfully");
      });
  };

  return (
    <div className="container my-5">
      <form
        onSubmit={handleRestockProduct}
        className="d-flex justify-content-center my-3"
      >
        <input
          ref={reStockRef}
          type="text"
          name="restock"
          placeholder="Enter Quantity"
        />
        <input
          className="btn btn-dark fw-bold ps-5 pe-5 ms-3"
          type="submit"
          value="Restock"
        />
      </form>
      <Card className="w-50 w-sm-100 mx-auto">
        <Card.Img className="w-100" variant="top" src={findCar.image} />
        <Card.Body>
          <Card.Title className="fw-bold">{findCar.name}</Card.Title>
          <Card.Text>{findCar.description}</Card.Text>
          <div className="d-flex justify-content-between">
            <div>
              <p className="fw-bold">Price: ${findCar.price}</p>
            </div>
            <div>
              <p className="fw-bold">Quantity: {findCar.quantity}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <Button onClick={handleNavigateCheckout} variant="dark">
              Checkout
            </Button>
            <Button
              onClick={() => handleNavigateDeliver(findCar)}
              variant="dark"
            >
              Delivered
            </Button>
          </div>
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default CarDetails;

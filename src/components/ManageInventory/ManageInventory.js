import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageInventory = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-sands-33985.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://enigmatic-sands-33985.herokuapp.com/cars/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = data.filter((car) => car._id !== id);
          setCars(remaining);
        });
    }
  };

  return (
    <div className="container">
      <h3 className="text-center fw-bold text-success mt-3 mb-4">
        Manage Inventory
      </h3>
      <div className="text-end mt-3">
        <Link to="/add_product" className="btn btn-success fw-bold ps-5 pe-5">
          Add Product
        </Link>
      </div>

      <div>
        <div className="mt-3 bg-dark text-white shadow mb-3 rounded-3 text-center">
          <Row className="align-items-center pt-2 pb-2">
            <Col>
              <h6>Image</h6>
            </Col>
            <Col>
              <h6>Name</h6>
            </Col>
            <Col>
              <h6>Price</h6>
            </Col>
            <Col>
              <h6>Quantity</h6>
            </Col>
            <Col>
              <h6>Remark</h6>
            </Col>
          </Row>
        </div>
      </div>
      {cars.map((car) => (
        <div key={car._id} className="shadow mb-3 rounded-3 text-center">
          <Row className=" align-items-center">
            <Col>
              <img width={"80px"} src={car.image} alt="" />
            </Col>
            <Col>{car.name}</Col>
            <Col>${car.price}</Col>
            <Col>{car.quantity}</Col>
            <Col>
              <button
                onClick={() => handleDelete(car._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default ManageInventory;

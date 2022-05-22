import React from "react";
import Car1 from "../../images/feature/car1.png";
import Car2 from "../../images/feature/car2.png";

const Feature = () => {
  return (
    <div className="d-flex container my-5">
      <div className="px-5 bg-primary border rounded py-2 me-2 ">
        <h4 className="text-white text-center mb-2">Want To Sale Your Car ?</h4>
        <p className="text-white text-center">
          Add your car in our Inventory and request a quote on the vehicle of
          your car.
        </p>
        <img className="w-100" src={Car1} alt="" />
      </div>
      <div className="px-5 bg-primary border rounded py-2 ms-2">
        <h4 className="text-white text-center mb-2">Want To Buy Used Car ?</h4>
        <p className="text-white text-center">
          Search your car in our Inventory and request a quote on the vehicle of
          your choosing.
        </p>
        <img className="w-100" src={Car2} alt="" />
      </div>
    </div>
  );
};

export default Feature;

import Car from "../Car/Car";
import useCars from "../../hooks/useCars";

const Cars = () => {
  let cars = useCars();

  return (
    <div className="row  g-3">
      {cars.map((car) => (
        <Car car={car} key={car._id}></Car>
      ))}
    </div>
  );
};

export default Cars;

import { useEffect, useState } from "react";
const useCars1 = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-sands-33985.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return cars;
};

export default useCars1;

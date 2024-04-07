import { useState } from "react";

const Catalog = () => {
  const cities = ["New York", "California", "Michigan", "Florida", "Paris"];

  let [i, setCount] = useState(0);

  function iRegulator() {
    if (i > cities.length - 2) {
      i = -1;
    }
  }

  function switchCity() {
    iRegulator();

    setCount(i + 1);
    console.log(i + 1);
    //console.log(cities.length);
  }

  return (
    <div className="listHolder">
      <h1>{cities[i]}</h1>

      <button onClick={switchCity}>ClickMe</button>
    </div>
  );
};

export default Catalog;

import React, { useState } from "react";
import babyNamesData from "../data/babyNamesData.json";
import "../style/NameDisplay.css";
import SearchBar from "./SearchBar";

const NameDisplay = () => {
  let [babyNames, setBabyNames] = useState(babyNamesData);
  let [babyNames2, setBabyNames2] = useState(babyNamesData);

  babyNames = babyNames.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });

  //const [searchNames, setSearchNames] = useState("");

  const handleSearch = (event) => {
    //console.log(event.target.value)
    if (event.target.value === "") {
      setBabyNames2(babyNames2);
      return babyNames2;
    } else {
      //setSearchNames(event.target.value);
      const filterData = babyNames2.filter((name) =>
        name.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setBabyNames(filterData);
      console.log(filterData);
      return filterData;
    }
  };

  return (
    <div className="baby-names">
      <SearchBar handleSearch={handleSearch} />
      {babyNames.map((baby, index) =>
        baby.sex === "m" ? (
          <p key={index} className="name-boy">
            {baby.name}
          </p>
        ) : (
          <p key={index} className="name-girl">
            {baby.name}
          </p>
        )
      )}
    </div>
  );
};

export default NameDisplay;

import React from "react";
import babyNamesData from "../data/babyNamesData.json";
import "../style/NameDisplay.css";
const NameDisplay = () => {
  babyNamesData = babyNamesData.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });
  return (
    <div className="baby-names">
      {babyNamesData.map((baby, index) =>
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

import React, { useState } from "react";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(false);

  function handleClick() {
    setIsMonthly(!isMonthly);
  }
  return (
    <div className="container">
      <h1>Our Pricing</h1>

      <div className="selector">
        <h2>Annually</h2>
        <span onClick={handleClick}>
          {isMonthly ? (
            <BsToggle2Off className="selector-bar" />
          ) : (
            <BsToggle2On className="selector-bar" />
          )}
        </span>
        <h2>Monthly</h2>
      </div>

      <div id="cards">
        <div className="card-left">
          <h2>Basic</h2>
          {!isMonthly ? (
            <h3 className="monthly">$19.99</h3>
          ) : (
            <h4 className="annually">$199.99</h4>
          )}

          <hr />
          <p>500 GB Storage</p>
          <hr />
          <p>2 Users Allowed</p>
          <hr />
          <p>Send up to 3 GB</p>
          <hr />
          <button>Learn More</button>
        </div>
        <div className="card-middle">
          <h2>Professional</h2>
          {!isMonthly ? (
            <h3 className="monthly">$24.99</h3>
          ) : (
            <h4 className="annually">$249.99</h4>
          )}
          <hr />
          <p>1 TB Storage</p>
          <hr />
          <p>5 Users Allowed</p>
          <hr />
          <p>Send up to 10 GB</p>
          <hr />
          <button>Learn More</button>
        </div>
        <div className="card-right">
          <h2>Master</h2>
          {!isMonthly ? (
            <h3 className="monthly">$39.99</h3>
          ) : (
            <h4 className="annually">$399.99</h4>
          )}
          <hr />
          <p>2 TB Storage</p>
          <hr />
          <p>10 Users Allowed</p>
          <hr />
          <p>Send up to 20 GB</p>
          <hr />
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

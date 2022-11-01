import React, { useState } from "react";
import { Button } from "antd";
import "./App.css";
import { Col, Row, Card } from "antd";

const App = () => {

  const [active , setActive] = useState(true)

  const ListClassName = [
    "rectangle",
    ,
    "parallelogram",
    ,
    "trapezoid",
    ,
    "oval",

    "square",
    "circle",
  ];

  function handleClick() {
    setActive(current => !current);
  }
 

  return (
    <div className="App-Background">
      <div style={{ paddingTop: "100px" }}>
        <Row gutter={10}>
          {ListClassName.map((item) => (
            <Card bordered={true} style={{ width: "40%" }}>
              <button className={active ? item  : 'square'} onClick={handleClick}></button>
            </Card>
           ))} 
        </Row>
      </div>
    </div>
  );
};

export default App;

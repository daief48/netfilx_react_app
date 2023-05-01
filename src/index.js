import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import Sdata from './Sdata';


ReactDOM.render(
  <>
    <h1 className="heading">Top 5 Netflix Series</h1>
    {Sdata.map((val) => {
      console.log(val)
      return (
        <Card
          imgsrc={val.imgscr}
          title={val.title}
          sname={val.sname}
          link={val.links}
        />
      )
    })}
  </>,
  document.getElementById("root")
)
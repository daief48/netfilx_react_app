import React, { useState } from 'react'
import Card from './Card';
import Sdata from './Sdata';
// useState(favSeries,setfavSeries) = ("Amazon Original Series")

export default function App() {
  const [favSeries, setfavSeries] = useState("Amazon Original Series");

  const option = () => {
    if(favSeries === "Amazon Original Series"){
        setfavSeries("Netflix Original Series")
    }else{
      setfavSeries("Amazon Original Series")
    }
  }
  return (
    <>
      <h1 className="heading">Top {favSeries} </h1>
      <div className="movies">
        {Sdata.map((val) => {
          console.log(val)
          if (favSeries === val.title) {
            return (
              <Card
                key={val.id}
                imgsrc={val.imgscr}
                title={val.title}
                sname={val.sname}
                link={val.links}
              />
            )
          } else if (favSeries === val.title) {
            return (
              <Card
                key={val.id}
                imgsrc={val.imgscr}
                title={val.title}
                sname={val.sname}
                link={val.links}
              />
            )
          }
        })}
      </div>
      <div className="btn_sub">
        <button onClick={option}>{favSeries} Series</button>
      </div>
    </>
  )
}

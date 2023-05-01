import React from 'react'
import Card from './Card';
import Sdata from './Sdata';

export default function App() {
  return (
    <>
    <h1 className="heading">Top 5 Netflix Series</h1>
    {Sdata.map((val) => {
      console.log(val)
      return (
        <Card
          key={val.id}
          imgsrc={val.imgscr}
          title={val.title}
          sname={val.sname}
          link={val.links}
        />
      )
    })}
  </>
  )
}

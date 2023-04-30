import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import  './index.css';
ReactDOM.render(
  <>
  <h1 className="heading">Top 5 Netflix Series</h1>
 <Card imgsrc="https://f4.bcbits.com/img/a2164492178_65"
  title="A Netflix Orignal Series"
  sname="DARK"
  link="https://www.netflix.com/bd/title/80100172"
 />       
  <Card imgsrc="https://resizing.flixster.com/9_UFhNH0nIQR71Jn-w94AJZbDFI=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjcwMjA0Ny53ZWJw"
  title="A Netflix Orignal Series"
  sname="Extra Curricular"
  link="https://www.netflix.com/bd/title/80990668"
 /> 
  <Card imgsrc="https://images.ctfassets.net/4cd45et68cgf/22eaxyrfqLTOmD0ZgFJDX0/6d7b8a0f4c3130fd87c9921cbd11d180/image5.jpg"
  title="A Netflix Orignal Series"
  sname="Stranger Things"
  link="https://www.netflix.com/bd/title/80057281"
 /> 
  <Card imgsrc="https://m.media-amazon.com/images/M/MV5BZDU3NWYwYjEtNmNmNy00NDJlLWI0MWItMjkzZDJmMTViZmJkXkEyXkFqcGdeQXVyMjM0ODM1NTE@._V1_.jpg"
  title="A Netflix Orignal Series"
  sname="Dracula"
  link="https://www.netflix.com/bd/title/80997687"
 /> 
  </>,
  document.getElementById("root")
)
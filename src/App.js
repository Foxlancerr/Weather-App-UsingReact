import React,{useState,useEffect} from "react";
import TopButton from "./components/topButton/TopButton.jsx";
import InputBox from "./components/input/InputBox.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/footer/Footer.jsx";
import formatData from "./components/ApiCall";
function App() {
  let condition = false;
  let [jsondata,setjsondata]=useState('[]')
  useEffect(()=>{
    dataGet()
  },[condition])

let dataGet = async ()=>{
  let data = await formatData({q:'london'})
  console.log(data)
  setjsondata(data)
}
  
  return (
    <div className="app">
      <div className="container">
        <TopButton data={jsondata}/>
        <InputBox></InputBox>
        <Hero></Hero>
        <Footer tittle = 'Daily Podcast'></Footer>
        <Footer tittle = 'Monthly Podcast'></Footer>
      </div>
    </div>
  );
}

export default App;

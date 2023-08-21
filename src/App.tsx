// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Companies from './Components/Companies'
// import  Programers from './Components/Programers'
// import MyCv from './Components/MyCv'
// import Test from './Components/Test'
function App() {
  
  {/* <MyCv></MyCv> */}

  return (
    <>
      {/* <div style={{display:"flex"}}>
      <Programers name='Mohammed' ExYear={2} company='A' programLang='Java' ></Programers>
      <Programers name='KHalid' ExYear={2} company='B' programLang='Java' ></Programers>
      <Programers name='Saad' ExYear={2} company='C' programLang='Java' ></Programers>
      </div> */}
      
      <div style={{display:"flex" , flexDirection:"column" ,}}>
        <Companies nameCom="Com 1" EmpNo={400} Year={2011} Services={{typeService: "S 1",price : 100}} ></Companies>
      </div>
      <div style={{display:"flex" , flexDirection:"column" ,}}>
        <Companies nameCom="Com 2" EmpNo={200} Year={2002} Services={{typeService: "S 2",price : 200}} ></Companies>
      </div>

    </>
  )
}

export default App

import React, { useEffect } from "react";
import Header from "./components/Header";
import stays from './data/stays.json';
import StayComponent from './components/StayComponent'
import { useGlobalContext } from './context';
function App() {
  const {location,AudltsGuests,childrenGuests}=useGlobalContext()
      useEffect(()=>{

    },[location,AudltsGuests,childrenGuests])
  return (
    <main className="container-fluid">
      <Header/>
      <div className="row under-header">
        <div>
          <h4>Stays in Finland</h4>
        </div>
        <div className="stay-num" >
          12+stay
        </div>
      </div>
      <div className="items-con row">
        {stays.map((stay)=>{
          return <StayComponent prop={stay} />
        })}
      </div>
    </main>
  );
}

export default App;

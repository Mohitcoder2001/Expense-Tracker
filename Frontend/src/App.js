import React from "react";
import styled from "styled-components";
import { MainLayout } from "./styles/layouts";
import Orb from './components/Orb/Orb'
import Navigation from "./components/Navigation/Navigation";
import { useState,useMemo } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Expenses from "./components/Expenses/Expenses";
import Income from "./components/Income/Income";
import { useGlobalContext } from './context/globalContext';

function App() {
  const [active,setActive] = React.useState(1);
  const global = useGlobalContext()
  console.log(global);
  const displayData = () =>{
    switch(active){
      case 1 :
        return <Dashboard />
      case 2 : 
        return <Dashboard />
      case 3 : 
        return <Income />
      case 4 : 
        return <Expenses />
      default : 
        return <Dashboard />        
    }
  }
  const orbmemo = useMemo(() => {
    return <Orb />
  },[])
  return (
    <AppStyled className = "App">
        {orbmemo}
        <MainLayout>
          <Navigation active  = {active} setActive = {setActive}/>
          <main>
               {displayData()}
          </main>
        </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
      height : 100vh;
      background-image : url{bg};
      positon : relative;

      main{
        flex : 1;
        background : rgba(252,246,249,0.78);
        border : 3px solid #FFFFFF;
        backdrop-filter : blur(4.5px);
        border-radius : 32px;
        overflow : auto;
        overflow-x : hidden;
        &::-webkits-scrollbar{
          width : 0;
        }
      }
`;
export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMsg from "./components/PrivacyMsg";
function App() {

  const privacy_value=useSelector(store=>store.privacy_value)
  return (
  
    <Card>
    <div className="px-4 py-5 my-5 text-center">
  
  <Header />
  <div className="col-lg-6 mx-auto">

    {privacy_value?<PrivacyMsg/>: <DisplayCounter />}
   
    <Controls />
  </div>

</div>
    </Card>
 
  );
}

export default App;

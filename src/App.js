
// import React, { createContext, useState } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Products from"./Components/Product"





// const Newcontext=createContext();

// function App() {
//   const[hide,sethide]=useState([]);
//   const [New,setNew]=useState(true);
//   return (
//     <div>
//       <Newcontext.Provider value={{value1:[hide,sethide],value2:[New,setNew]}}>
//         <BrowserRouter>
//         {/* {New?<Navbar/>:""} */}
//          <Routes>
//   {/* <Route path="/popular" element={<Api/>}></Route>
//   <Route path="/comedy" element={<Comedymovie/>}></Route>
//   <Route path="/latest" element={ <Latest/>}></Route> */}
//   {/* <Route path="/details/:id" element={ <Detailpage/>}></Route> */}
//   <Route path="/" element={<Products/>}></Route>
  
  
// </Routes>
//         </BrowserRouter>
//       </Newcontext.Provider>
//     </div>
//   )
// }

// export default App
// export {Newcontext}

















// ------------------------------------------------------------------------------------------------------------------------------
import React, { useState} from "react";
import Amazon from "./Components/Amazon";
import Navbar from "./Components/Navbar.jsx";
import Cart from "./Components/Cart";
//import Card from "./Components/Card"

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    console.log(item);
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App;
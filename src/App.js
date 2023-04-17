import React,{ useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CardProvider from "./store/CartProvider";

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const showCardHandler = () =>{
    setCartIsShown(true);
  };

  const hideCardHandler = () =>{
    setCartIsShown(false);
  }


  return (
    <CardProvider>
    {cartIsShown &&<Cart onClick={hideCardHandler} />}
      <Header onShowCart={showCardHandler} />
      <main>
      <Meals />
      </main>
    </CardProvider>
  );
}

export default App;

import CartContainer from "./compoenet/CartContainer";
import Navbar from "./compoenet/Navbar";
import {useDispatch,useSelector} from "react-redux"
import { calculateTotal } from "./cartSlice";
import { useEffect } from "react";
import Modal from "./compoenet/Modal";

function App() {
  const {cartItem}  = useSelector((store)=>store.cart)
  const dispatch = useDispatch();
  useEffect(()=>{
dispatch(calculateTotal());
  },[cartItem])

  return <main>
    {/* //<Modal/> */}
    <Navbar/>
    <CartContainer/>
  </main>
}
export default App;

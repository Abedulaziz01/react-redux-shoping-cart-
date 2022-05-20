import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { clearCart } from '../cartSlice'

const CartContainer = () => {
    const {cartItem,amount,total} = useSelector((store)=>store.cart)
    const dispatch = useDispatch();

   if(amount<1){
       return (
           <section className='cart'>
               <header>
                   <h2>your bag</h2>
                   <h4 className='empty-cart'>is empty</h4>
               </header>
               
           </section>
       )
   }

  return (
   <section className='cart'>
      <header>
          <h2>your bag</h2>
          <div>
              {cartItem.map((item)=>{
                  return <CartItem key={item.id}{...item}/>
              })}
          </div>
          <footer>
              <div className='cart-total'>
              <hr/>
           <h4>total <span>${total.toFixed()}</span></h4>   
           </div>
           <button className='btn clear-btn'
           onClick={()=>dispatch(clearCart())}
           >
              clear cart
           </button>
          </footer>
      </header>
   </section>
  )
}

export default CartContainer
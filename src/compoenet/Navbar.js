import{CartIcon} from '../icons'
import React from 'react'
import {useSelector} from 'react-redux'


function Navbar() {
   const {amount} =  useSelector((state)=>state.cart)

  return (
<nav className='nav-center'>
 <h3>redux </h3>
   <div className='nav-container '>
         <CartIcon/>
         <div className='amount-container'>
             <p className='total-amount'>{amount}</p>

        </div>
   </div>
  </nav>
  )
}

export default Navbar
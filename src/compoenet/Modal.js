import React from 'react'

function Modal() {
  return (
    <aside className='modal-container'>
        <div className='modal'>
        <h4>remove all item</h4>
          <div className='btn-container'>
             <button
             type="button"
             classname="btn confirm-btn"
             >
               confirm 
             </button>
             <button
             type="button"
             classname="btn clear-btn"
             >
               canel 
             </button>
           </div>
        </div>

    </aside>
  )
}

export default Modal
import React from 'react'
 import doctors from './Assets/doctors.png';
import './Assets/Biography.css'
function Biography() {
  return (
    <>

<div className='biography'>

<div className='doctors_img'>


  <img src={doctors} id="doctors" alt="" />
</div>
<div className='bio_data'>

<h3>Biography</h3>
  <h1>Who We Are</h1>
  <p>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui temporibus, quae laborum accusantium enim cum iure aliquid, libero nulla, quia ducimus quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi quasi in.
  </p>
</div>




</div>




    </>
  )
}

export default Biography
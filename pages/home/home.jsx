import React, { useState } from 'react'
import './home.css'
import header from '../../component/header/header'

const home = () => {
    const [category,setCategory] = useState("All");

  return (
    <div>
      <header/>
      <exploreManu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default home

import React, { useState } from 'react'

function Dashboard() {

    const [FirstName , setFirstName] =useState(localStorage.getItem("fname"))
    // const [LastName , setLastName] =useState(localStorage.getItem("lname"))


  return (
    <div>
        <h1>{FirstName}</h1>
    </div>
  )
}

export default Dashboard
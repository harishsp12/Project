import React, { useEffect, useState } from 'react'

function Calculator() {

    const[data , setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/employee/all")
        .then(response =>{
            if(!response.ok){
                throw new Error("Network response was not ok")          // throw , new , Error  this is a key word
            }
            // console.log(response)
            return response.json();
        })
        .then(answer => {
            // console.log(answer , "databaseee");
            setData(answer)
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:',error)
        })
    },[])           //   depentance array

    console.log(data)



  return (
    <div>
        <h1>hellodsdsd</h1>
        {/* <h1>{data.map()}</h1>
        <h1>{data.email}</h1>
        <h1>{data.firstname}</h1>
         */}

            {data.map(emp =>(
                <div key={emp.id}>
                <p>{emp.email}</p>
                </div>
            ))}


{/* {
    data.map((emp,index)=>(
        <div key={index}>
        <h1> {emp.email} </h1>
        <h1> {emp.firstname} </h1>

        </div>

    ))
} */}
    </div>
  )
}

export default Calculator
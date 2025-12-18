import React, { useState } from 'react'

function Form() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [pass, setPass]= useState('')

    const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstname: fname,
      lastname: lname,
      email: username,
      password: pass
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch('http://localhost:8080/employee/add', requestOptions);
      if (!response.ok) {
        throw new Error('Failed to add product');
      } 
      const result = await response.json();
      console.log('Product added successfully!', result);
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter the fname' value={fname} onChange={(e) => setFname(e.target.value)}/>
            <input type='text' placeholder='Enter the lnam' value={lname} onChange={(e) => setLname(e.target.value)}/>
            <input type='text' placeholder='Enter the username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type='text' placeholder='Enter the password' value={pass} onChange={(e) => setPass(e.target.value)}/>
            <button type='submit'>Add Product</button>

        </form>
    </div>
  )
}

export default Form
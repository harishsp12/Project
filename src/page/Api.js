import React, { useState } from 'react'

function Api() {

    const [idname, setIdname] = useState('')
     const [updateStatus, setUpdateStatus] = useState(null);

  
  const updateProduct = async (productId, updatedProductData) => {
  try {
      const response = await fetch(`http://localhost:8080/employee/update/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProductData),
      });

     


      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      const result = await response.json();
      setUpdateStatus(result.message); 
    } catch (error) {
      console.error('Error updating product:', error.message);
      setUpdateStatus('Error: ' + error.message);
    }
  };

      const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const updatedProductData = {
      
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
         email: formData.get('email'),
         password: parseInt(formData.get('password')),
          

    };
      await updateProduct(idname, updatedProductData); 
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type='number' name='id' value={idname} onChange={(e) => setIdname(e.target.value)} placeholder='Enter the id'/>
            <input type='text' name='firstname' placeholder='Enter the firstname'/>
            <input type='text' name="lastname" placeholder='Enter the lastname'/>
            <input type='email' name="email" placeholder='Enter the email'/>
            <input type='number' name="password" placeholder='Enter the password'/>
            
            <button type='submit'>Update product</button>





        </form>
    </div>
  )
}

export default Api
// import React from 'react'
// import "./Delete.css";

// function Delete() {

//         const [idname, setIdname] = useState('')
//          const [updateStatus, setUpdateStatus] = useState(null);
    
      
//       const deleteProduct = async (productId, updatedProductData) => {
//       try {
//           const response = await fetch(`http://localhost:8080/employee/delete/${productId}`, {
//             method: 'DELETE',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(deleteProductData),
//           });
    
         
    
    
//           if (!response.ok) {
//             throw new Error('Failed to update product');
//           }
    
//           const result = await response.json();
//           setUpdateStatus(result.message); 
//         } catch (error) {
//           console.error('Error updating product:', error.message);
//           setUpdateStatus('Error: ' + error.message);
//         }
//       };
    
//           const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         const formData = new FormData(e.target);
      
//           await deleteProduct(idname); 
//       };
//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//           <input type='number' name='id' value={idname} onChange={(e) => setIdname(e.target.value)} placeholder='Enter the id'/>
//             <input type='text' name='firstname' placeholder='Enter the firstname'/>
//             <input type='text' name="lastname" placeholder='Enter the lastname'/>
//             <input type='email' name="email" placeholder='Enter the email'/>
//             <input type='number' name="password" placeholder='Enter the password'/>
            
//             <button type='submit'>Update product</button>

//         </form>

//     <h1 className='fadeIn'>WELCOME</h1>

//     </div>
//   )
// }

// export default Delete
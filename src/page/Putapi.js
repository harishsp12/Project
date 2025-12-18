import  { useEffect, useState } from 'react';

function Putapi() {

  const [idname, setIdname] = useState('');     // React component-kulla data store panna use pannra oru tool

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const [updateStatus, setUpdateStatus] = useState('');
  

  //   GET by ID
  useEffect(() => {             // depantance value change agamathu ulla erukkura code  run agum
    
    if (idname){

    fetch(`http://localhost:8080/employee/${idname}`)
      .then(res => {
        if (!res.ok) {
              setFormData({
          firstname: "",
          lastname: "",
          email: "",
          password: ""
         
        });
          throw new Error("ID not found");
        }
        return res.json();
      })
      .then(data => {
        setFormData({
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          password: data.password
        });
      })
      .catch(err => {
        console.error(err);
      });
    }
 else{
         setFormData({
          firstname: "",
          lastname: "",
          email: "",
          password: ""
         
        });
    }
  }, [idname]);
  

  // 🔹 Input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 PUT update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/employee/update/${idname}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        }
      );

      if (!response.ok) {
        throw new Error("Update failed");
      }

      const result = await response.text();
      setUpdateStatus(result || "Updated successfully");
   
    } catch (error) {
      setUpdateStatus(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input
          type="number"
          placeholder="Enter ID"
          value={idname}
          onChange={(e) => setIdname(e.target.value)}
        />

        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          value={formData.firstname}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={formData.lastname}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Update</button>

      </form>

      {updateStatus && <p style={{color: "red"}}>{updateStatus}</p>}
    </div>
  );
}

export default Putapi;

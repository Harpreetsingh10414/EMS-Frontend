// import { useState } from "react";
// import "./PostUser.css";
// import { Form } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

const PostUser = () => {
    return (
        <>
         <h1>Meri Galti Hai Maro mujhe Maroo</h1>
        </>
       
    )
}
   
//     const [formData, setformdata] = useState({
//         name: "",
//         email:"",
//         phone:"", 
//         department:""
//     });

//     const changeInput = (event) => {
//         const {name,value} = event.target;
//         setformdata({
//             ...formData,
//             [name]:value,
//         })
//     }

//     const navigate = useNavigate();

    

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         console.log(formData);
    
//         try {
//             const response = await fetch("http://localhost:8080/api/employee", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(formData)
//             });
    
//             const data = await response.json();
//             console.log("hehe", data);
    
//             navigate("/");
//         } catch (error) {
//             console.error("Error:", error.message);
//         }
//     }
    
   
//     return (
//         <>
//             <div className="center-form">
//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group controlId="formBasicName">
//                         <Form.Control 
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={changeInput}
//                             />
//                     </Form.Group> 
//                     <Form.Group controlId="formBasicEmail">
//                         <Form.Control 
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={changeInput}
//                             />
//                     </Form.Group>
//                     <Form.Group controlId="formBasicPhone">
//                         <Form.Control 
//                             type="number"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={changeInput}
//                             />
//                     </Form.Group>
//                     <Form.Group controlId="formBasicDep">
//                         <Form.Control 
//                             type="text"
//                             name="department"
//                             value={formData.department}
//                             onChange={changeInput}
//                             />
//                     </Form.Group>
//                     <Button  variant="primary" type="submit" className="w-100">POST</Button>
//                 </Form>

//             </div>


//         </>
//     )
// }

export default PostUser;
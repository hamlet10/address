// import { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import GridComponent from "./Grid";
// // import CreateUpdate from "./CreateUpdate";
// import Spinner from "react-bootstrap/Spinner";
// import Container from "react-bootstrap/Container";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import Form from "react-bootstrap/Form";
// const [elements, setElements] = useState([]);
// //const [loading, setLoading] = useState(true);

// const deleteAt=(e)=>{
//     if(confirm("Esta seguro que desea eliminar")){
//       axios.delete(`http://localhost:5122/api/Books/${e}`)
//       .then((response) =>{
//         alert("Eliminado Correctamente")
//       }).catch(err => alert(`${e}`))
//     }
//   }

// const  UserList = () => {
//   useEffect(() => {
//     axios.get("http://localhost:3000/api/users").then((response) => {
//       setElements(response.data);
//       setLoading(false);
//     });
//   });

//   return (
//     <div>
//       <Table striped bordered hover className="table table-dark">
//         <thead>
//           <tr>
//             <th>No. </th>
//             <th>Name</th>
//             <th>LastName</th>
//             <th>Date of Birth</th>
//             <th>Sex</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <GridComponent
//           elements={elements}
//           handleRemove={deleteAt}
//           childMessage={buttonClicket}
//         />
//       </Table>
//     </div>
//   );

// };
// export default UserList;

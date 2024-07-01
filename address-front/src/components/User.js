import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import GridComponent from "./Grid";
// import CreateUpdate from "./CreateUpdate";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Form from "react-bootstrap/Form";
const User = () => {

  const [elements, setElements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  
  const [newUser, setNewUser] = useState({
    name: "",
    lastName: "",
    dateOfBirth: "",
    sex: "",
  });
  
  const navigate = useNavigate();
  const buttonClicket = (e) => {
    navigate(`/user/${e}`);
    console.log(e);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/api/users").then((response) => {
      setElements(response.data.data);
      setLoading(false);
    });
  });

  const deleteAt = (e) => {
    if (window.confirm("Esta seguro que desea eliminar")) {
      //eslint-disable-line
      axios
        .delete(`http://localhost:3000/api/Books/${e}`)
        .then((response) => {
          alert("Eliminado Correctamente");
        })
        .catch((err) => alert(`${e}`));
    }
  };

  const handleShow = () => {
    setShow(true);
    console.log(show);
  };

  const handleInpunt =(e)=>{
    setNewUser({...newUser, [e.target.name]: e.target.value})
  }

  const handleClose = () => {
    if(!newUser){
    }
    setShow(false);
  };

  const addUser =(e) => {
    e.preventDefault();
    setNewUser(newUser)

    const myUser = {
      ...newUser,
    }
    axios.post("http://localhost:3000/api/createuser", {
      ...myUser
    },{
      headers:{
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      alert(`Guardado Correctamente`);
      handleClose();
    }).catch(e  => alert(`${e}`))

  }

  return (
    <Container fluid="md">
                      <div className="jumbotron">
        <h1 className="display-4">Users</h1>
        <p className="lead">World biggest User Manager</p>
        <hr className="my-4" />
        <button 
          onClick={() => handleShow()}
          className="btn btn-primary btn-md pull-right"
        >
          Add New
        </button>
      </div>
      <Table striped bordered hover className="table table-dark">
        <thead>
          <tr>
            <th>No. </th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de Nacimiento</th>
            <th>Sex</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <GridComponent
          elements={elements}
          handleRemove={deleteAt}
          childMessage={buttonClicket}
        />
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addUser}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control value={newUser.name}  onChange={handleInpunt} name="name" type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Apellido</Form.Label>
              <Form.Control  value={newUser.lastName} onChange={handleInpunt} name="lastName" rows={3} type="text" placeholder="Apellido" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control value={newUser.dateOfBirth} onChange={handleInpunt} name="dateOfBirth" rows={3} type="date" placeholder="Page Count" />
            </Form.Group>
            <Form.Group>
            <Form.Label>Sexo:</Form.Label>
            <Form.Check type="radio" name="sex" value={true} label="masculino"/>
            <Form.Check type="radio"name="sex" value={false} label="femenino"/>
                

                
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={addUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default User;

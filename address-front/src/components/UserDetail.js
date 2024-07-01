import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import  AddressList  from "./AddresList";

const UserDetail = () => {

  const [user, setUser] = useState({});
  const [userAddress, setUserAddress] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users/${params.id}`)
      .then((response) => {
        setUser(response.data.data[0]);
      });
    axios.get(`http://localhost:3000/api/address/${params.id}`) 
    .then((response) => {
        setUserAddress(response.data.data)
    })     
  });

  return (
    <div className="container">
      <div className="book-info">
        <h2>Name: {user.name}</h2>
        <p>Last Name: {user.lastName}</p>
        <p>Fecha: {user.dateOfBirth}</p>
        <p>Sexo: {user.sex ? "masculino" : "femenino"}</p>
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <hr/>
      <h2>Direciones</h2>
      <AddressList address={userAddress}/>
    </div>
  );
};

export default UserDetail;
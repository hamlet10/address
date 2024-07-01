

const GridComponent = ({ elements, childMessage, handleRemove }) => {
  const handelClick = (e) => {
    childMessage(e);
  };

  const removeItem =(e)=>{
    handleRemove(e);
  };



  return (
      <tbody>
        {elements && elements.map && elements.map((element, id)   => (
          <tr key={id}>
            <td>{element.id}</td>
            <td>{element.name}</td>
            <td>{element.lastName}</td>
            <td>{element.dateOfBirth}</td>
            <td>{element.sex ? "masculino" : "femenino"} </td>
            <td>
              <button>
                <i className="fa fa-pencil"></i>
              </button>
              <button onClick={() => handelClick(element.id)}>
                <i className="fa fa-search">detail</i>
              </button>
              <button>
                <i onClick={() => removeItem(element.id)} className="fa fa-times"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>

  );

}
export default GridComponent;

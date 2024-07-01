import Card from "react-bootstrap/Card";

const AddressList = ({address}) => {
  return (
    <div>
        {address && address.map && address.map((element, id) =>(
            <Card key={id}>
                <Card.Body>
                    <Card.Title>{element.Calle}</Card.Title>
                    <Card.Subtitle>{element.No}</Card.Subtitle>
                </Card.Body>
            </Card>
        ))}
      {/* <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card> */}
    </div>
  );
};

export default AddressList;
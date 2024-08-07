import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CreateProduct = () => {
    return ( 
        <>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>Create Product</Card.Title>
                        <hr></hr>
                        Product Name:
                        <input type="text" className='form-control' />
                        <br></br>
                        Product Price:
                        <input type="number" className='form-control' />
                        <br></br>
                        Product Category:
                        <select name="" id="" className='form-control'>
                            <option value="bags">Bag</option>
                            <option value="wallet">Wallet</option>
                            <option value="shoes">Shoes</option>
                        </select>
                        <br></br>
                        Product Description:
                        <input type="number" className='form-control' />
                        <br></br>
                        <Button variant="warning" className='w-100'>Create Item</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
     );
}
 
export default CreateProduct;
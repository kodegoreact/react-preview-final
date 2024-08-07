import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ProductShow = (props) => {
    const products = props.products;
    return ( 
        <>
        <div className="row g-2 justify-content-center">
            {
                    products.map((product)=>(
                        <div className="col-md-4">
                            <Card key={product.id}>
                                <Card.Img variant="top" src={product.img}/>
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                    <Button variant="warning">Add to Cart</Button>
                                    <Button variant="outline-warning ms-2">More Information</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                )
            }
        </div>
        </>
     );
}
 
export default ProductShow;
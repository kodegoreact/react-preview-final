import Table from 'react-bootstrap/Table';
const Cart = () => {
    return ( 
        <>
            
                <div className='card m-3'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <img src="https://kodegoreact.github.io/react-lessons-assets/imgs/bag2.png" className='w-100' />
                            </div>
                            <div className='col-md-8'>
                                <h4>Multi Pochette</h4>
                                <h5>125000 Pesos</h5>
                                <p>
                                Stylish and sustainable, this backpack features multiple pockets and durable canvas, ideal for everyday adventures.
                                </p>
                                <button className='btn btn-danger'>
                                    Remove From Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card m-3'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <img src="https://kodegoreact.github.io/react-lessons-assets/imgs/bag1.png" className='w-100' />
                            </div>
                            <div className='col-md-8'>
                                <h4>Dauphine BB Belt</h4>
                                <h5>85000 Pesos</h5>
                                <p>
                                Sleek and sophisticated, this leather tote offers ample space and a minimalist design, perfect for work or casual outings.
                                </p>
                                <button className='btn btn-danger'>
                                    Remove From Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
            
        </>
     );
}
 
export default Cart;
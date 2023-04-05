import React from 'react';
import NavBarDashboard from "../components/NavBarDashboard";

function Products(props) {

     const user = {
        id: 1,
        username: 'johndoe',
        is_staff: false,
    };

     const products =[
         {Product:"BBQ Grill", Category:"Out Door",Price:"200.0"},
         {Product:"Dishes", Category:"Indoor",Price:"50.0"},
         {Product:"Ball", Category:"Out Door",Price:"30.0"},

     ]
    return (
        <div>
            <br/>
            <NavBarDashboard user={user}/><br/>
            <div className="row">
                <div className="col-md">
                    <div className="card card-body">
                        <h5>Products</h5>
                    </div>
                    <div className="card card-body">
                        <table className="table">
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                            </tr>
                            {products.map((product)=>(
                                <tr>
                                <td>{product.Product}</td>
                                <td>{product.Category}</td>
                                <td>{product.Price}</td>
                            </tr>
                            ))}

                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Products;
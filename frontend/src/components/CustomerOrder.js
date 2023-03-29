import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/customerorder.css'
const CustomerOrder = ({ customers, orders }) => {
  return (
      <div className="border">
      <div className="row">
        <div className="col-md-5">
          <h5>CUSTOMERS:👨‍👨‍👧‍👦</h5>
          <hr />
          <div className="card card-body">
            <Link className="btn btn-primary btn-sm btn-block" to="/create_customer">
              Create Customer
            </Link>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th></th>
                  <th>Customer</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td>
                      <Link className="btn btn-sm btn-info" to={`/customer/${customer.id}`}>
                        View
                      </Link>
                    </td>
                    <td>{customer.name}</td>
                    <td>{customer.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="border">
          <h5>ORDERS🚚</h5>
          <hr />
          <div className="card card-body">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Date Orderd</th>
                  <th>Status</th>
                  <th>Update</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.product}</td>
                    <td>{order.date_created}</td>
                    <td>{order.status}</td>
                    <td>
                      <Link className="btn btn-sm btn-info" to={`/update_order/${order.id}`}>
                        Update
                      </Link>
                    </td>
                    <td>
                      <Link className="btn btn-sm btn-danger" to={`/delete_order/${order.id}`}>
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
        </div>
  );
};

export default CustomerOrder;

import React from 'react';
import NavBarDashboard from "../components/NavBarDashboard";
import {Link} from "react-scroll";
import image from "../images/profile1.png";

const UpdateOrder = (props) => {
    const user = {
        id: 1,
        username: 'johndoe',
        is_staff: false,
    };

    const userOptions = [
    { label: 'User 1', value: 'product_a' },
    { label: 'User 2', value: 'product_b' },
    { label: 'User 3', value: 'product_c' },
  ];

     const dishesOptions = [
    { label: 'korma', value: 'korma_a' },
    { label: 'biryani', value: 'biryani_b' },
    { label: 'White saus pasta', value: 'saus_c' },
  ];
      const statusOptions = [
    { label: 'Pending', value: 'Pending_a' },
    { label: 'Out for delivery', value: 'delivery_b' },
    { label: 'Delivered', value: 'Delivered_c' },
  ];
    return (
        <>
            <br/>
            <NavBarDashboard user={user}/>
            <br/>
             <div className="row">
                <div className="col-md-3">
                    <div className="card card-body">
                        <form >
                                <label htmlFor={`user_name`}>User:</label>
                            <select
                              id={`user_select`}
                              name="product"
                            >
                              <option value="">Select User</option>
                              {userOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                            <br/>
                            <label htmlFor={`user_name`}>Dishes:</label>
                            <select
                              id={`user_select`}
                              name="product"
                            >
                              <option value="">Select Dishes</option>
                              {dishesOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                            <br/>
                            <label htmlFor={`user_name`}>Delivery Status:</label>
                            <select
                              id={`user_select`}
                              name="product"
                            >
                              <option value="">Select Delivery status</option>
                              {statusOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                            <br/>

                            <label htmlFor={`notes_value`}>Note:</label>
                            <textarea
                              id={`notes_text`}
                              name="note"
                              // value={}
                              // onChange={(event) => handleInputChange(event, index)}
                            ></textarea><br/>
                            <button type="submit">Submit</button>
                        </form>

                    </div>
                </div>
             </div>
        </>
    )
}

export default UpdateOrder;
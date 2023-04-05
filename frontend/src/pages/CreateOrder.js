import React, { useState } from 'react';
import NavBarDashboard from "../components/NavBarDashboard";
import '../Css/Createorder.css'


function CreateOrder(props) {

  const [orderItems, setOrderItems] = useState([
    { product: '', note: '' },
  ]);

  const csrfToken = "csrfToken";
  const user = {
        id: 1,
        username: 'johndoe',
        is_staff: false,
    };
  const productOptions = [
    { label: 'Product A', value: 'product_a' },
    { label: 'Product B', value: 'product_b' },
    { label: 'Product C', value: 'product_c' },
  ];

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...orderItems];
    list[index][name] = value;
    setOrderItems(list);
  };

  const handleAddItem = () => {
    setOrderItems([...orderItems, { product: '', note: '' }]);
  };

  const handleRemoveItem = (index) => {
    const list = [...orderItems];
    list.splice(index, 1);
    setOrderItems(list);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here using orderItems state
  };

  return (
      <div>
        <br/>
        <NavBarDashboard  user={user}/><br/>
        <div className="row">
        <div className="col-md-6">
          <div className="card card-body card_css">
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="form_css_multi">
              {csrfToken && (
                <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
              )}
              {orderItems.map((item, index) => (
                <div key={index}>
                  <div>
                    <label htmlFor={`products_${index}`}>Product:</label>
                    <select
                      id={`products_${index}`}
                      name="product"
                      value={item.product}
                      onChange={(event) => handleInputChange(event, index)}
                    >
                      <option value="">Select Product</option>
                      {productOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor={`notes_${index}`}>Note:</label>
                    <textarea
                      id={`notes_${index}`}
                      name="note"
                      value={item.note}
                      onChange={(event) => handleInputChange(event, index)}
                    ></textarea>
                  </div>
                  <button type="button" onClick={() => handleRemoveItem(index)}>
                    Delete
                  </button>
                  <hr />
                </div>
              ))}
              <button type="button" onClick={handleAddItem}>
                Add Product
              </button>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
    </div>
      </div>

  );
}

export default CreateOrder;

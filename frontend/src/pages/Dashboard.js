import React from 'react';
import NavBarDashboard from "../components/NavBarDashboard";
import Status from "../components/status";
import CustomerOrder from "../components/CustomerOrder";


const Dashboard = (props) => {
    const user = {
        id: 1,
        username: 'johndoe',
        is_staff: false,
    };
    const customers = [
            { id: 1, name: "John Doe", phone: "123-456-7890" },
            { id: 2, name: "Jane Smith", phone: "987-654-3210" },
            { id: 3, name: "Bob Johnson", phone: "555-555-5555" },
            ];

            const orders = [
            { id: 1, product: "T-Shirt", date_created: "2022-01-01", status: "Pending" },
            { id: 2, product: "Mug", date_created: "2022-01-02", status: "Shipped" },
            { id: 3, product: "Hat", date_created: "2022-01-03", status: "Delivered" },
            ];

    return (<>
        <br/>
        <NavBarDashboard user={user}/>
        <br/>
        <Status />
        <br/>
        <CustomerOrder customers={customers} orders={orders}/>
    </>)
};

export default Dashboard;
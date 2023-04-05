import React from 'react';
import NavBarDashboard from "../components/NavBarDashboard";
import {Link} from "react-scroll";
import '../Css/delete.css'
const Delete = (props) => {
    const user = {
        id: 1,
        username: 'johndoe',
        is_staff: false,
    };

    function handleSubmit() {

    }

    return(
        <>
            <br/>
            <NavBarDashboard user={user}/>
            <br/>
                <div className="row card_css">
                    <div className="col-md-6">
                        <div className="card card-body card_inner">
                            <p className="size_text">Are you sure you want to delete ""?</p>

                            <form  method="POST">

                                <Link className="btn btn-warning cancel_button" to="/dashboard">Cancel</Link>&#8592;

                                <Link className="btn btn-danger cancel_button" onSubmit={handleSubmit} to="/dashboard" name="Confirm">Delete</Link>
                            </form>
                        </div>
                    </div>
                </div>

            </>
    )

}


export default Delete;
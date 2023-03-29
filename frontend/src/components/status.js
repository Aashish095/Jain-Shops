import React from 'react';
import '../Css/status.css'

const Status = (props) => {

    return (<>

            <div className="row">
                <div className="col">
                    <div className="col-md">
                        <div className="card text-center text-white  mb-3" id="total-orders">
                            <div className="card-header">
                                <h5 className="card-title">Total Orders</h5>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">2</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="col-md">
                        <div className="card text-center text-white  mb-3" id="orders-delivered">
                            <div className="card-header">
                                <h5 className="card-title">Orders Delivered</h5>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">3</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="col-md">
                        <div className="card text-center text-white  mb-3" id="orders-pending">
                            <div className="card-header">
                                <h5 className="card-title">Orders Pending</h5>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">6</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Status;
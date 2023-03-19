import React, { useEffect, useState } from 'react'

export default function MyOrders() {

    const [orderData, setOrderData] = useState("");
    const fetchMyOrder = async () => {
        // e.preventDefault();
        // console.log(JSON.stringify({ email: localStorage.getItem('userEmail') }))
        await fetch("http://localhost:5000/api/myOrderData", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: localStorage.getItem('userEmail') })
        }).then(async (res) => {
            let response = await res.json();
            setOrderData(response);
        })
    }

    useEffect(() => {
        fetchMyOrder();
    }, [])

    return (
        <div className="container">
            {/* {console.log(JSON.stringify({ email: localStorage.getItem('userEmail') }))} */}
            <div>
                {orderData !== {} ? Array(orderData).map(data => {
                    return (
                        // {console.log(data)}
                        data.myOrderData ? data.myOrderData.order_data.slice(0).reverse().map((item) => {
                            return (
                                item.map((arrayData, index) => {
                                    // console.log(arrayData)
                                    return (
                                        <div>
                                            {arrayData.order_data ?
                                                <div key={index}>
                                                    {data = arrayData.order_data}
                                                    <hr />
                                                </div> :
                                                <div className="row">
                                                    <div key={index} className="col-12 col-md-6 col-lg-3">
                                                        <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                            {/* <img src={arrayData.img} className="card-img-top" alt="" style={{ minHeight: "150px", maxHeight: "150px" }} /> */}
                                                            <div className="card-body">
                                                                <h5 className="card-title">{arrayData.name}</h5>
                                                                <div className="container w-100 p-0" style={{ height: "38px" }}>
                                                                    <span className="m-1">{arrayData.qty}</span>
                                                                    <span className="m-1">{arrayData.size}</span>
                                                                    <span className="m-1">{data}</span>
                                                                    <div className="d-inline ml-2 h-100 w-20 fs-5">{arrayData.price}/-</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )
                                })
                            )
                        }) : <div>No History of Order 1</div>
                    )
                }) : <div>No History of Order Available</div>}

            </div>
        </div>
    )
}

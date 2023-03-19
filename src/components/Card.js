import React, { useEffect, useRef, useState } from 'react';
import '../GeneralStyle.css';
import { useCart, useDispatchCart } from './ContextReducer';

export default function Card(props) {
    const basic = {
        width: '16rem',
        margin: '2rem',
        maxHeight: '500px'
    }
    const priceRef = useRef();
    const { name, img, desc } = props;
    let Options = Object.keys(props.options);

    // let foodItems = props.foodItem;

    let dispatch = useDispatchCart();
    let CartData = useCart();

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");



    const addToCart = async () => {

        let food = [];
        for (const item of CartData) {
            if (item.id === props.uni) {
                food = item;
                break;
            }
        }
        
        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.uni, price: finalprice, qty: qty });
                return;
            }
            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: props.uni, name: name, img: img, price: finalprice, qty: qty, size: size });
                return;
            }
            return;
        }
        else {
            await dispatch({ type: "ADD", id: props.uni, name: name, img: img, price: finalprice, qty: qty, size: size });
        }
    }

    let finalprice = qty * parseInt(props.options[size]);

    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])




    return (
        <div key={props.uni} className="mx-2">
            <div className="card" style={basic}>
                <img src={img ? img : "./Images/foodIllus.jpg"} className="card-img-top" alt="..." style={{ minHeight: "150px", maxHeight: "150px" }} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desc.substring(0, 50)}...</p>
                    {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                    <div className="container w-100 d-flex justify-content-start">
                        <select className='h-100 w-100 m-1 bg-warning rounded text-white' type="text" name="Select Option" list="cityname" placeholder="Qty" onChange={(e) => setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>


                        <select className='m-1 h-100 w-100 bg-warning rounded' name="Select Option" id="" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {Options.map((opt) => {
                                return <option key={opt} value={opt}>{opt}</option>
                            })}
                        </select>

                    </div>
                    <label className='container align-item-center my-auto text-success fs-5' htmlFor=""><i className="fa fa-inr"></i>{finalprice}/-</label>
                    <hr />

                    <button className={`btn btn-success justify-center ms-2`} onClick={addToCart}>Add to Cart</button>
                </div>

            </div>
        </div>
    )
}

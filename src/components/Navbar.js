import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import '../GeneralStyle.css';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';


export default function Navbar() {
    const [cnPasserr, setCnPasserr] = useState(null);
    const [welcomUser, setWelcomeUser] = useState({ type: "welcome", userName: localStorage.getItem('name') });
    const loginRef = useRef(null);
    const signinRef = useRef(null);
    const ref_sg_Close = useRef(null);
    const ref_lg_Close = useRef(null);
    function loginModal(e) {
        e.preventDefault();
        loginRef.current.click();
    }
    function signinModal(e) {
        e.preventDefault();
        signinRef.current.click();
    }
    function extUser(e) {
        e.preventDefault();
        ref_sg_Close.current.click();
        loginRef.current.click();
    }
    function newUser(e) {
        e.preventDefault();
        ref_lg_Close.current.click();
        signinRef.current.click();
    }

    const onChangeInputVal = (e) => {
        if (e.target.name.charAt(0) === 's') {
            setSgCred({ ...sgCred, [e.target.name]: e.target.value })
        }
        else {
            setLgCred({ ...lgCred, [e.target.name]: e.target.value })
        }

    }
    const resetSg = () => {
        setSgCred({ sname: "", semail: "", spassword: "", sconfirmPass: "", slocation: "" })
    }

    const [sgCred, setSgCred] = useState({ sname: "", semail: "", spassword: "", sconfirmPass: "", slocation: "" })
    const { sname, semail, spassword, sconfirmPass, slocation } = sgCred;

    const handleSignSubmit = async (e) => {
        e.preventDefault();
        // console.log( JSON.stringify({ name: sgCred.sname, email: sgCred.semail, password: sgCred.spassword, location: sgCred.slocation, cPass:sgCred.sconfirmPass }))
        if (spassword === sconfirmPass) {
            const response = await fetch("http://localhost:5000/api/createUser", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                // body: JSON.stringify({ name: sgCred.sname, email: sgCred.semail, password: sgCred.spassword, location: sgCred.slocation })
                body: JSON.stringify({ name: sname, email: semail, password: spassword, cpassword: sconfirmPass, location: slocation })
            });
            const json = await response.json();
            // console.log(json);

            if (!json.success) {
                alert("Enter Valid Credentials!!")
            }
            else {
                setSgCred({ sname: "", semail: "", spassword: "", sconfirmPass: "", slocation: "" })
                setCnPasserr("");
                ref_sg_Close.current.click();
            }
        }
        else {
            setCnPasserr("error");
        }

    }
    // Loginhandle.............................................
    const [lgCred, setLgCred] = useState({ lemail: "", lpassword: "" })
    const { lemail, lpassword } = lgCred;

    const handleLogSubmit = async (e) => {
        e.preventDefault();
        // console.log(JSON.stringify({ email:lemail,password:lpassword}))
        const response = await fetch("http://localhost:5000/api/loginUser", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            // body: JSON.stringify({ name: sgCred.sname, email: sgCred.semail, password: sgCred.spassword, location: sgCred.slocation })
            body: JSON.stringify({ email: lemail, password: lpassword })
        });
        const json = await response.json();
        // console.log(json);

        if (!json.success) {
            alert("Enter Valid Credentials!!")
        }

        // storing Auth_Touken............. 
        else {
            localStorage.setItem('authToken', json.authToken);
            localStorage.setItem('name', json.userName);
            localStorage.setItem('userEmail', json.email);
            setWelcomeUser({ type: "welcome", userName: localStorage.getItem('name') });
            setLgCred({ lemail: "", lpassword: "" });
            ref_lg_Close.current.click();
        }

    }

    let totalOrder = useCart();
    const [cartView,setCartView] = useState(false);

    const logoutHandle = (e) => {
        localStorage.removeItem('name');
        window.location.reload();
        // navigate('/login');
        // props.showAlert("You are Logout successfully","success")
    }
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-sm bg-warning">
                    <div className="container-fluid d-flex">
                        <Link className="text-black navbar-brand fs-4" to="/" ><img src="./Images/Navicon.png" alt="" style={{ height: "70px", margin: "0 .5rem" }} /><i>FoodMonk</i></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="text-black nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                {localStorage.getItem('name') ?
                                    <li className="nav-item">
                                        <Link className="text-black nav-link" to="/myOrder">My Orders</Link>
                                    </li> : ""
                                }
                            </ul>

                        </div>
                        {welcomUser.userName && <div className="welcomeUser mx-4 btn disabled text-purple">{'Welcome'} <span className="fs-4 text-dark">{welcomUser.userName}</span></div>}



                        {!localStorage.getItem('name') ? <form className="d-flex" role="search">
                            <button className='btn btn btn-primary mx-2' onClick={loginModal}>Login</button>
                            <button className='btn btn btn-primary mx-2' onClick={signinModal}>SignUp</button>
                        </form> :
                        <div>

                           <Link onClick={()=>{setCartView(true)}}>
                           <img src="./Images/cart.png" className="mx-2" alt="" style={{height:"40px"}} />
                           {totalOrder.length===0?<Badge pill bg="danger"></Badge>:<Badge pill bg="danger">{totalOrder.length}</Badge>}
                         
                           </Link>
                           {cartView?<Modal onClose={()=>{setCartView(false)}}><Cart/></Modal>:null}

                            <button onClick={logoutHandle} className="btn btn-primary mx-2">Logout</button>
                            </div>
                            }

                    </div>
                </nav>


                {/* Toasts................................................................... */}


                <div className="toast" id="Toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        {/* <img src="..." className="rounded mr-2" alt="..."> */}
                        <strong className="mr-auto">FoodMonk</strong>
                        {/* <small>11 mins ago</small> */}
                        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                </div>
            </div>

            {/* //........................Login Modal ..................*/}

            <button type="button" ref={loginRef} className="btn btn-primary" style={{ display: "none" }} data-bs-toggle="modal" data-bs-target="#loginModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login Here</h5>
                            <button type="button" ref={ref_lg_Close} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleLogSubmit}>

                                <div className="mb-3">
                                    <label htmlFor="lemail" className="form-label">Email</label>
                                    <input onChange={onChangeInputVal} value={lgCred.lemail} type="email" className="form-control" id="lemail" name="lemail" aria-describedby="emailHelp" placeholder="Email" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lpassword" className="form-label">Password</label>
                                    <input onChange={onChangeInputVal} value={lgCred.lpassword} type="password" className="form-control" id="lpassword" name="lpassword" placeholder="Password" />
                                </div>
                                <div className="mb-3 d-flex flex-row-reverse">
                                    <Link className="text-blue " data-bs-dismiss="modal" onClick={newUser}>I'm a New User</Link>
                                </div>

                                <div className="modal-footer ">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>


            {/*.......................... SignUp Modal.......................... */}



            <button type="button" ref={signinRef} className="btn btn-primary" style={{ display: "none" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <form onSubmit={handleSignSubmit}>
                <div className="modal fade" ref={ref_sg_Close} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Sign Up Here!!</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <div className="mb-3">
                                    <label htmlFor="sname" className="form-label">Name </label>
                                    <input onChange={onChangeInputVal} value={sgCred.sname} type="text" className="form-control" id="sname" name="sname" placeholder="Input Name Here" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="semail" className="form-label">Email address</label>
                                    <input onChange={onChangeInputVal} value={sgCred.semail} type="email" className="form-control" id="semail" name="semail" aria-describedby="emailHelp" placeholder="Email" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="" style={{ display: "flex" }}>
                                    <div className="mb-3" style={{ marginRight: "1.5rem", width: "100%" }}>
                                        <label htmlFor="spassword" className="form-label">Password</label>
                                        <input onChange={onChangeInputVal} value={sgCred.spassword} type="password" className="form-control" id="spassword" name="spassword" placeholder="Pasword" />


                                    </div>

                                    <div className="mb-3 ml-2" style={{ width: "100%" }}>

                                        <label htmlFor="spassword" className="form-label">Confirm Password</label>

                                        <input onChange={onChangeInputVal} value={sgCred.sconfirmPass} type="password" className="form-control" id="sconfirmPass" name="sconfirmPass" placeholder="Confirm Pasword" />
                                    </div>
                                </div>
                                <div className="mb-3 d-flex flex-row-reverse">
                                    {cnPasserr && <label style={{ color: "red", maxHeight: "12px" }}>Confirm Your Password !!</label>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="slocation" className="form-label">Address</label>
                                    <input onChange={onChangeInputVal} value={sgCred.slocation} type="text" className="form-control" name="slocation" id="slocation" placeholder="Address" />
                                </div>
                                <div className="mb-3 d-flex flex-row-reverse">
                                    <Link className="text-blue " data-bs-dismiss="modal" onClick={extUser}>Already a User</Link>
                                </div>

                                <div className="modal-footer d-flex justify-content-between">
                                    <button type="button" className="btn btn-secondary"
                                        onClick={resetSg}>Reset</button>
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
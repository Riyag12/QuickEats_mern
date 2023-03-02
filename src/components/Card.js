import React from 'react'

export default function Card() {
    
    const basic = {
        width: '18rem',
        margin: '2rem',
        maxHeight: '400px'
    }


    return (
        <div>
            <div className="card" style={basic}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                    <div className="container w-100 d-flex">
                        <select className='m-2 h-100 w-100 bg-warning rounded' name="Select Option" id="">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>

                        <select className='m-2 h-100 w-100 bg-warning rounded' name="Select Option" id="">
                            <option value="Half">Half</option>
                            <option value="Full">Full</option>
                        </select>

                        <label className='align-item-center mx-2 my-auto text-success fs-5' htmlFor="">Price</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

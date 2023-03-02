import React from 'react';
import '../GeneralStyle.css';

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./Images/burger.jpg" className="d-block w-100 img-crsl opct-5" alt="..." />
                        <div className="carousel-caption d-none d-md-block text-white ">
                            <h5 className='fs-4'>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        <form className="d-flex" style={{margin: "0 10rem"}}>
                        <input className="form-control me-2 bg-white" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./Images/slide1.jpg" className="d-block w-100 img-crsl opct-5" alt="..." />
                        <div className="carousel-caption d-none d-md-block text-white ">
                            <h5 className='fs-4'>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        <form className="d-flex" style={{margin: "0 10rem"}}>
                        <input className="form-control me-2 bg-white" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./Images/drinkslide.jpg" className="d-block w-100 img-crsl opct-5" alt="..." />
                        <div className="carousel-caption d-none d-md-block text-white ">
                            <h5 className='fs-4'>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        <form className="d-flex" style={{margin: "0 10rem"}}>
                        <input className="form-control me-2 bg-white" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

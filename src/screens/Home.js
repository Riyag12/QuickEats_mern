import '../GeneralStyle.css';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
// import Carousel from '../components/Carousel';

export default function Home() {

  const [foodDet, setFoodDet] = useState([]);
  const [foodCat, setFoodCat] = useState([]);
  const [foodSearch, setFoodSearch] = useState("");
  const [foodSearchButton, setFoodSearchButton] = useState("");

  const loadFoodData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    response = await response.json();
    // console.log(response);
    setFoodDet(response);
  }
  const loadFoodCat = async () => {
    let response = await fetch("http://localhost:5000/api/foodCat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    response = await response.json();
    // console.log(response);
    setFoodCat(response);
  }

  // FOOD SEARCH......................
  const foodSearchResult = (e) => {
    e.preventDefault();
    console.log(foodSearchButton);
    setFoodSearchButton(foodSearch);
  }
  const searchReload = () => {
    setFoodSearchButton(" ");
  }

  useEffect(() => {
    loadFoodData();
  }, [])
  useEffect(() => {
    loadFoodCat();
  }, [])


  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./Images/burger.jpg" className="d-block w-100 img-crsl opct-5" alt="..." />
            <div className="carousel-caption d-none d-md-block text-white ">
              <h5 className='fs-4'>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
              <form className="d-flex" style={{ margin: "0 10rem" }}>
                <input className="form-control me-2 bg-white" type="search" id="foodsearch1" placeholder="Search" aria-label="Search" value={foodSearch} onKeyDown={searchReload} onChange={(e) => setFoodSearch(e.target.value)} />
                <button onClick={foodSearchResult} className="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./Images/slide1.jpg" className="d-block w-100 img-crsl opct-5" alt="..." />
            <div className="carousel-caption d-none d-md-block text-white ">
              <h5 className='fs-4'>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
              <form className="d-flex" style={{ margin: "0 10rem" }}>
                <input className="form-control me-2 bg-white" type="search" id="foodsearch2" placeholder="Search" aria-label="Search" value={foodSearch} onKeyDown={searchReload} onChange={(e) => setFoodSearch(e.target.value)} />
                <button onClick={foodSearchResult} className="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./Images/drinkslide.jpg" className="d-block w-100 img-crsl opct-5" alt="..." />
            <div className="carousel-caption d-none d-md-block text-white ">
              <h5 className='fs-4'>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
              <form className="d-flex" style={{ margin: "0 10rem" }}>
                <input className="form-control me-2 bg-white" type="search" id="foodsearch3" placeholder="Search" aria-label="Search" value={foodSearch} onKeyDown={searchReload} onChange={(e) => setFoodSearch(e.target.value)} />
                <button onClick={foodSearchResult} className="btn btn-success" type="submit">Search</button>
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
      <div className="container">

        {
          foodCat !== [] ? foodCat.map((data, index) => {
            return (<div key={data._id} className=" row mb-3">
              <div className="fs-3 m-3">
                {data.CategoryName}
              </div>
              <hr />
              {
                foodDet !== [] ? foodDet.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(foodSearchButton.toLowerCase())))
                  .map((filteredItem, index) => {
                    return (<>
                      <div key={filteredItem.name} className="col-12 col-md-6 col-lg-3">
                        <Card uni={filteredItem._id} name={filteredItem.name} img={filteredItem.img} desc={filteredItem.description}
                          foodItem={filteredItem}
                          options={filteredItem.options[0]}
                        />
                      </div>
                    </>
                    )
                  }) : <div>Sorry! Nothing there!</div>
              }

            </div>

            )
          }) : ""
        }


      </div>
    </div>
  )
}

import React from 'react'
import '../Home/Home.css'
import girl from '../assets/img.jpg'
import bir from '../assets/Group 2.jpg'
import ikki from '../assets/Group 2.jpg'
import uch from '../assets/Group 2.jpg'
import Qidirish from '../assets/Qidirish.png'


function Home() {
  return (
  <div className='navbar'>
        <div className="wrap">
          <div className="Katta">
              <h2>Badiiyat</h2>
          </div>
            <li>Bosh sahifa</li>
            <li>Kitoblar</li>
            <li>Nazm</li>
            <li>Maqolalar</li>
            <li>Forum</li>
              <div className="person">
                 <img className='man' src={girl} alt="" />
              </div>
       </div>
        <div id="carouselExampleIndicators" class="carousel slide slideer">
         <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={bir} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={ikki} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={uch} class="d-block w-100" alt="..."/>
            </div>
          </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className="search">
                <img  src={Qidirish} alt="" />
          <div class="input-group flex-nowrap styleinp">
            <input type="text" class="form-control" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." aria-label="Username" aria-describedby="addon-wrapping"/>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn " type="button"> <i class="bi bi-search"></i>Izlash</button>
          </div>
          </div>
        
</div>
   
  )
}

export default Home
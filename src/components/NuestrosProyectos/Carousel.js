import React from 'react';
import Image1 from '../../assets/pexels-lukas-669615.jpg';
import Image2 from '../../assets/startup-photos.jpg';
import Image3 from '../../assets/people-woman-coffee-meeting.jpg';

const Carousel = () => {
    return (
        <div className="carousel slide m-auto w-5" data-bs-ride="carousel">
            <div clclassNameass="carousel-inner">
                <div className="carousel-item active">
                    <img src={Image1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={Image2} className="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={Image3} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span clclassNameass="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel

import React, { useState } from 'react';
import user1 from "../images/user-1.jpg";
import user2 from "../images/user-2.jpg";
import user3 from "../images/user-3.jpg";
import '../Css/slider.css'

const SlideOperations = (props) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 3 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 1 : currentSlide + 1);
  };

  return (
    <>
      <div className="slider">
        <div className={`slide slide--${currentSlide}`}>
          <div className="testimonial">
            <h5 className="testimonial__header">Satisfied customers!</h5>
            <blockquote className="testimonial__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium quas quisquam non? Quas voluptate nulla minima
              deleniti optio ullam nesciunt, numquam corporis et asperiores
              laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
              id alias reiciendis, perferendis facere pariatur dolore veniam
              autem esse non voluptatem saepe provident nihil molestiae.
            </blockquote>
            <address className="testimonial__author">
              <img src={user1} alt="" className="testimonial__photo" />
              <h6 className="testimonial__name">Aarav Lynn</h6>
              <p className="testimonial__location">San Francisco, USA</p>
            </address>
          </div>
        </div>

        <div className={`slide slide--${currentSlide === 1 ? 2 : currentSlide === 2 ? 3 : 1}`}>
          <div className="testimonial">
            <h5 className="testimonial__header">Try at your timing</h5>
            <blockquote className="testimonial__text">
              Quisquam itaque deserunt ullam, quia ea repellendus provident,
              ducimus neque ipsam modi voluptatibus doloremque, corrupti
              laborum. Incidunt numquam perferendis veritatis neque repellendus.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            </blockquote>
            <address className="testimonial__author">
              <img src={user2} alt="" className="testimonial__photo" />
              <h6 className="testimonial__name">Miyah Miles</h6>
              <p className="testimonial__location">London, UK</p>
            </address>
          </div>
        </div>

        <div className={`slide slide--${currentSlide === 1 ? 3 : currentSlide === 2 ? 1 : 2}`}>
          <div className="testimonial">
            <h5 className="testimonial__header">Finally take its easy</h5>
            <blockquote className="testimonial__text">
              Debitis, nihil sit minus suscipit magni aperiam vel tenetur
              incidunt commodi architecto numquam omnis nulla autem,
              necessitatibus blanditiis modi similique quidem. Odio aliquam
              culpa dicta beatae quod maiores ipsa minus consequatur error sunt,
              deleniti saepe aliquid quos inventore sequi. Necessitatibus id
              alias reiciendis, perferendis facere.
            </blockquote>
            <address className="testimonial__author">
              <img src={user3} alt="" className="testimonial__photo" />
              <h6 className="testimonial__name">Francisco Gomes</h6>
              <p className="testimonial__location">Lisbon, Portugal</p>
            </address>
          </div>
        </div>

        <button className="slider__btn slider__btn--left" onClick={prevSlide}>&larr;</button>
        <button className="slider__btn slider__btn--right" onClick={nextSlide}>&rarr;</button>
        <div className="dots"></div>
      </div>
    </>
  );
};

export default SlideOperations;

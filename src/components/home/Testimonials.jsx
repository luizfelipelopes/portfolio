import React from "react";
import { Jumbotron } from "./migration";


const Testimonials = ({ heading, data, imgSize, showPic }) => {

  return (
    <Jumbotron id="testimonials" className="bg-white m-0">
      <h2 className="display-4 mb-5 text-center">{heading}</h2>

      <div className="testimonials">

        {data.map((item, index) => (
          <div className="container row col-lg-5 testimonial">
            <div className="col-3 d-none d-lg-block align-self-center image-testimonial">
              {showPic && (
                <img
                  className="border border-secondary rounded-circle"
                  src={item.imageLink}
                  alt="profilepicture"
                  width={imgSize}
                  height={imgSize}
                />
              )}
            </div>
            <div className={`col-lg-${showPic ? "9" : "12"}`}>
              <p className="lead message-testimonial">"{item.message}"</p>
              <p className="lead info-person-testimonial">{`${item.name} - ${item.local}`}</p>
            </div>
          </div>

        ))}
      </div>
    </Jumbotron>
  );
};

export default Testimonials;

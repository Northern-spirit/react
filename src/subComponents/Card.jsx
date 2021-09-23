import React from 'react';
import './../styles/Card.css';
import Rest from './../images/Rest.png'

const Card = (props) => {
  const {bestOffer} = props
  const bestOff = () => {

  }
  return (
    <div className="card">
      <div className="head_img_card">
        {
          bestOffer
          ? <div className="offer">BEST OFFER</div>
          : <div className="no_offer"></div>
        }
        <div className="share"></div>
      </div>
      <div className="img_card"><img src={Rest} className="ImgCard"/></div>
      <div className="about_card">
        <div className="header_card"><strong>Your Experience</strong></div>
        <div className="price_rating">
          <div className="price_card"><strong>$ 100 / hour</strong></div>
          <div className="faceConfirm">
            <div className="rating_icon"></div>
            <div className="rating_number">4.6</div>
        </div>
        </div>
          <div className="card_details">
            Duration: from 60 min <br />Training and Riding Horses and Ponies
          </div> 
      </div>
    </div>
  );
}

export default Card;
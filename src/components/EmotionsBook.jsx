import React from 'react'
import './../styles/EmotionsBook.css';
import Book from './../images/Book.png'
import Calendar from '../subComponents/Calendar';


const EmotionsBook = () => {
  return (
    <div className="EmotionsBook" id="EmotionsBook">
      <div>
        <div className="card_serv_type">
          <div className="lotus"></div>
          <div className="sale">– 30 OFF</div>
        </div>
        <div className="book_image">
          <img src={Book} className="bookImage"/>
        </div>
      </div>
      <div className="description">
        <div className="book_header">Урок сыроделия</div>
        <div className="book_text_about">Среди сыроваров есть тенденция, что они не хотят делиться своими секретами и рецептами. Говорят, что это очень сложное дело...что нужно ехать в Европу или идти в подмастерье к настоящему сыровару на несколько лет, да и то не факт, что тебе раскроют все секреты. Но это не так!</div>
        <div className="emotions_book_column">
          <div>
            <div className="calendar"><Calendar /></div>
            <div className="price">От 1 373 ₽ / Чел.</div>
          </div>
          <div className="second_column">
            <div className="time">
              <div className="icon_time"></div>
              <div className="text_time"><b>60</b> мин.</div>
            </div>
            <div className="max_number_people">
              <div className="icon_people"></div>
              <div className="text_people"><b>До 10 человек</b></div>
            </div>
            <div className="include">
              <div className="icon_include"></div>
              <div className="text_include"><b>Что включено:</b> ✓ Напитки <br />✓ Плед ✓ Сувениры</div>
            </div>
            <div className="language_tour">
              <div className="icon_language"></div>
              <div className="text_language"><b>Языки тура:</b> ✓ Английский <br />✓ Французкий</div>
            </div>
            <div className="free_cancel">Бесплатная отмена</div>
            <a><div className="btn">Текст в кнопке</div></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmotionsBook;
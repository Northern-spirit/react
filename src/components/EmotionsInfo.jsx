import './../styles/EmotionsInfo.css';
import { YMaps, Map } from "react-yandex-maps";

const mapData = {
  center: [41.48047138261828,2.3168804523925686],
  zoom: 11,
};


const EmotionsInfo = () => {
  return (
    <div id="EmotionsInfo">
      <div>
        <div className="EmotionsInfoTitle">
          Важная информация:
        </div>
        <div className="EmotionInfoGrid">
          <div className="EmotionInfoColumn">
            <div className="Emotion_header">
              Правила отмены:
            </div>
            <div>
              Впечатление можно отменить в течение 24 часов после оплаты или за 7 дней до начала и получить полный возврат.
            </div>
            <div className="details">
              Подробнее ›
            </div>
          </div>
          <div className="EmotionInfoColumn">
            <div className="Emotion_header">Требования к гостю:</div>
            <div>Максимальное число гостей от 18 лет: 10. Родители могут взять с собой детей до 2 лет.</div>
            <div className="details">Подробнее ›</div>
          </div>
          <div className="EmotionInfoColumn">
            <div className="Emotion_header">Алкоголь:</div>
            <div>Мероприятие включает в себя алкоголь. Спиртные напитки будут доступны только гостям, достигшим возраста официально разрешённого потребления спиртных напитков.</div>
          </div>
        </div>
        <div className="EmotionInfoGrid">
          <div className="EmotionInfoColumn_second">
            <div className="Emotion_header">Дополнительно:</div>
            <div>Вам понадобится кастрюля на 3 литра, молоко 4 литрв, лопатка деревянная и халат и маска и все такое. Лучше запастись этим заранее.</div>
          </div>
          <div className="EmotionInfoColumn_second">
            <div className="Emotion_header">Взять с собой:</div>
            <div>✓ Кастрюля, 3 литра нержавейка<br />
                  ✓ Молоко любое, 4 литра<br />
                  ✓ Деревянная лопатка для помешивания<br />
                  ✓ Марля медицинская, 1 метр<br />
                  ✓ Халат, маска, шапочка тканевая</div>
          </div>
          <div className="EmotionInfoColumn_second">
            <div className="Emotion_header">Информация о COVID-19:</div>
            <div>
              <div className="covid_info_str">
                <div className="icon_mask"></div>
                <div>Маска обязательна</div>
              </div>
              <div className="covid_info_str">
                <div className="icon_distant"></div>
                <div>Дистанция 1,5 метра</div>
              </div>
              <div className="covid_info_str">
                <div className="icon_disinf"></div>
                <div>Проводится дизинфекция</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="place">
        <div>
        <div className="title_place_taxi">
          <div className="place_title">Место проведения</div>
          <div className="taxi">
            <div className="icon_taxi"></div>
            <div>Вызвать такси до места</div>
          </div>
        </div>
        <div className="place_map">
        <YMaps>
          <Map defaultState={mapData} className="maps_y"></Map>
        </YMaps>
        </div>
        </div>
        <div className="clarifications">
          <div className="clarifications_column">
            <div className="Emotion_header">
              Как нас найти:
            </div>
            <div>
              Третий поворот налево, возле супермаркета «Перекрёсток»
            </div>
            <div className="details">
              Скачать схему ›
            </div>
          </div>
          <div className="clarifications_column">
            <div className="Emotion_header">Подробности:</div>
            <div>Внимание! Последний автобус отходит в 22:00</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmotionsInfo;
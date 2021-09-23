import './../styles/EmotionsTopRow.css';

const EmotionsTopRow = () => {
  return (
    <div className="EmotionsTopRowContainer">
      <div className="EmotionsTopRow">
        <div className="EmotionsBreadcrumps">
          <div className="EmotionsBreadcrumpsLeft">
            <div>Франция</div>
            <div className="arrow-right"></div>
            <div>Париж</div>
            <div className="arrow-right"></div>
            <div>Туры</div>
            <div className="arrow-right"></div>
            <div>Своими руками</div>
          </div>
          <div className="EmotionsBreadcrumpsRight">
            <a className="item-share">
              <div className="share_top"></div>
              <div className="header_share">Поделится</div>
            </a>
            <a className="item-favorites">
              <div className="favorites"></div>
              <div className="header_favorites">В избранное</div>
            </a>
          </div>
        </div>
        <div className="title_header">
          Урок сыроделия 
        </div>
        <div className="" id="EmotionsTabs_plug"></div>
        <div className="EmotionsTabs" id="EmotionTabs" style={{top: "98px"}}>
          <a className="RoutsRibbonButtons" href="#emotionsAbout" id="RoutsRibbonButtons_overview">
            <div className="icon-overview"></div>
            <div className="title-overview">Обзор</div>
          </a>
          <a className="RoutsRibbonButtons" href="#EmotionsAuthor" id="RoutsRibbonButtons_organization">
            <div className="icon-organizer"></div>
            <div className="title-organizer">Организатор</div>
          </a>
          <a className="RoutsRibbonButtons" href="#EmotionsInfo" id="RoutsRibbonButtons_information ">
            <div className="icon-information"></div>
            <div className="title-information">Информация</div>
          </a>
          <a className="RoutsRibbonButtons" href="#EmotionsBook" id="RoutsRibbonButtons_date">
            <div className="icon-date"></div>
            <div className="title-date">Выбрать даты</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default EmotionsTopRow;

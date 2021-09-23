import './../styles/EmotionsComments.css';
import './../styles/EmotionsAuthor.css'
import Avatar from './../images/otzivi.png'

const EmotionsComments = () => {
  return (
    <div>
    <div className="EmotionsAuthorTitle">
        <div>
            Отзывы:
        </div>
        <div className="faceConfirm">
            <div className="rating_icon"></div>
            <div className="rating_number">4.6</div>
            <div>
              Читать всё ›
            </div>
        </div>
    </div>
    <div className="EmotionsAuthorAbout">
        <div className="EmotionsAuthorName">
            <div className="EmotionsAuthorNameAvatar"><img src={Avatar} /></div>
            <div className="EmotionsAuthorNameAbout">
                <div className="EmotionsAuthorNameAboutName"><strong>Alexandra</strong></div>
                <div className="EmotionsAuthorNameAboutDate">На сайте с Января 2021 г.</div>
            </div>
        </div>
        <div className="EmotionsAuthorNameAboutText">
        Сейчас я готов передать свою технологию сыроделия!
За последний год я смог обучить более 200 000 человек сыроделию онлайн.<br />
Уверен, что приготовить сыр получится и у вас!
Вы узнаете как на самом деле делается сыр на производстве и на кухне.
Увидите и узнаете все тонкости и нюансы реального сыроделия от человека, который развил сыроварню с 0 до 1000л молока в день!
        </div>
    </div>
</div>
  );
}

export default EmotionsComments;

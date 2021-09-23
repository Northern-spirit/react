import './../styles/EmotionsAuthor.css';
import Avatar from './../images/Ellipse.png'

const EmotionsAuthor = () => {
  return (
    <div id="EmotionsAuthor">
        <div className="EmotionsAuthorTitle">
            <div>
                Организатор:
            </div>
            <div className="faceConfirm">
                <div className="faceConfirmIcon"></div>
                <div>
                    Личность подтверждена
                </div>
            </div>
        </div>
        <div className="EmotionsAuthorAbout">
            <div className="EmotionsAuthorName">
                <div className="EmotionsAuthorNameAvatar"><img src={Avatar} /></div>
                <div className="EmotionsAuthorNameAbout">
                    <div className="EmotionsAuthorNameAboutName"><strong>Yvonnick Alexandrovich</strong></div>
                    <div className="EmotionsAuthorNameAboutDate">На сайте с Января 2021 г.</div>
                </div>
            </div>
            <div className="EmotionsAuthorNameAboutText">
            Сейчас я готов передать свою технологию сыроделия!
За последний год я смог обучить более 200 000 человек сыроделию онлайн.
Уверен, что приготовить сыр получится и у вас!<br />
Вы узнаете как на самом деле делается сыр на производстве и на кухне.
Увидите и узнаете все тонкости и нюансы реального сыроделия от человека, который развил сыроварню с 0 до 1000л молока в день!<br /><br />
Современные молочные заводы, в большинстве своем работают без молока. Сухая сыворотка и химические реагенты - вот что вы купите в магазине под названием "сыр".
 Хороший сыр можно найти только на небольших частных сыроварнях, да и то не всегда он вкусный, а зачастую ещё и дорогой!<br />
Что же, пора вам решать, что вы будете кушать. Химическое сырье из магазина или свой настоящий сыр?
            </div>
        </div>
    </div>
  );
}

export default EmotionsAuthor;

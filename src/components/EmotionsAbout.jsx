import './../styles/EmotionsAbout.css';
import MainImage from './../images/MainImage.jpg'
import img1 from './../images/Image (1).jpg'
import img2 from './../images/Image.jpg'
import img3 from './../images/Image (2).jpg'
import img4 from './../images/Image (3).jpg'
import img5 from './../images/Image (4).jpg'


const EmotionsAbout = () => {
  return (
    <div className="emotionsAbout" id="emotionsAbout">
      <div className="emotionsAboutImages">
        <div className="mainImage"><img src={MainImage} className="MainImage"/></div>
        <div className="images">
          <div className="image"><img src={img2}/></div>
          <div className="image"><img src={img1}/></div>
          <div className="image"><img src={img3}/></div>
          <div className="image"><img src={img4}/></div>
          <div className="image"><img src={img5}/></div>
          <a className="frame" href="https://ant.design/">
            <div className="frame_icon"></div>
            <div className="frame_text">Все фото: 99</div>
          </a>
        </div>
      </div>
      <div>
        <div className="emotionsAboutTitle">
          Обзор тура:
        </div>
        <div className="emotionsAboutGrid">
          Среди сыроваров есть тенденция, что они не хотят делиться своими секретами и рецептами. Говорят, что это очень сложное дело...что нужно ехать в Европу или идти в подмастерье к настоящему сыровару на несколько лет, да и то не факт, что тебе раскроют все секреты. Но это не так!
        </div>
      </div>
    </div>
  );
}

export default EmotionsAbout;


import './../styles/MainTopMenu.css';
import logo from './../images/Logo.svg'
import search from './../images/Search.svg'

const MainTopMenu = () => {
  const Mobile_menu = () => {
    if(document.querySelector(".Mobile_menu").classList.contains("hide")) {
      document.querySelector(".Mobile_menu").classList.remove("hide")
    } else{
      document.querySelector(".Mobile_menu").classList.add("hide")
    }
  }
  return (
    <div className="MainTopMenu">
      <div className="MainTopMenuLeft">
          <div className="Logo-Breezzor">
              <img src={logo} />
          </div>
          <div className="MainTopMenuItems">
              <div className="Heading">Пляжи</div>
              <div className="Heading">Breezzor pass</div>
              <div className="Heading">Впечатления</div>
              <div className="Heading">Маршруты</div>
          </div>
      </div>
      <div className="MainTopMenuRight_mobile hide" onClick={Mobile_menu}></div>
        <div className="Mobile_menu hide">
        <div className="MainTopMenuItems_mobile">
          <div className="Heading">Пляжи</div>
          <div className="Heading">Breezzor pass</div>
          <div className="Heading">Впечатления</div>
          <div className="Heading">Маршруты</div>
        </div>
          <div className="top_menu_search">
              <img src={search} />
          </div>
          <div className="Buttons">
              Вход
          </div>
      </div>
      <div className="MainTopMenuRight">
          <div className="top_menu_search">
              <img src={search} />
          </div>
          <div className="Buttons">
              Вход
          </div>
        </div>


    </div>
  );
}

export default MainTopMenu;

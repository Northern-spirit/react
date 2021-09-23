import './../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="inside_footer">
        <div className="str_footer">
            <div>
                <div className="header_footer">О компании</div>
                <div>
                    <div className="subHeader_footer">Кто мы</div>
                    <div className="subHeader_footer">Что мы делаем</div>
                    <div className="subHeader_footer">Команда</div>
                </div>
            </div>
            <div>
                <div className="header_footer">Для бизнеса</div>
                <div>
                    <div className="subHeader_footer">Добавить пляжи</div>
                    <div className="subHeader_footer">Добавить услуги</div>
                </div>
            </div>
            <div>
                <div className="header_footer">Поддержка</div>
                <div>
                    <div className="subHeader_footer">Связаться с нами</div>
                    <div className="subHeader_footer">Пользовательское соглашение</div>
                    <div className="subHeader_footer">Политика конфиденциальности</div>
                    <div className="subHeader_footer">Публичная оферта для поставщиков</div>
                </div>
            </div>
        </div>
        <div className="str_footer">
            <div>
                <div className="header_footer">Карьера</div>
                <div>
                    <div className="subHeader_footer">Присоединиться к команде</div>
                    <div className="subHeader_footer">Список вакансий</div>
                </div>
            </div>
            <div>
                <div className="header_footer">Пресс-центр</div>
                <div>
                    <div className="subHeader_footer">Подписка на пресс-релизы</div>
                </div>
            </div>
        </div>
        <div className="divider"><hr /></div>
        <div className="footer_bottom">
            <div>© 2021 Breezzor inc. All rights reserved</div>
            <div className="right_bottom">
                <div className="earth">
                    <div className="earth_icon"></div>
                    <div className="earth_text">Русский (RU)</div>
                </div>
                <div className="social_network">
                    <div className="fb"></div>
                    <div className="inst"></div>
                    <div className="twitter"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

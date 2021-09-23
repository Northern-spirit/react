import './../styles/EmotionsMore.css';
import Card from './../subComponents/Card'

const EmotionsMore = () => {
    const tabButton = (value) => {
        if(document.querySelector(".open")){
            document.querySelector(".open_tab").classList.remove("open_tab")
            document.querySelector(".open").classList.remove("open")
        }
        document.querySelector("#tabs_" + value).classList.add("open")
        document.querySelector('#tab_' + value).classList.add('open_tab')
    }
  return (
    <div className="emotions_more">
      <div className="header">Вам также может понравиться</div>
      <div className="text">Всего символов: 321 Без пробелов: 272 Количество слов: 50 Quis exercitation deserunt aliquip Lorem non velit id ad incididunt eu. Eu labore eiusmod duis ad cupidatat occaecat dolor anim eiusmod fugiat labore sunt eu. Officia mollit eu officia excepteur aute nostrud aliquip. Deserunt ullamco irure esse eu labore consequat.</div>
      <div>
        <div className="panelButton">
          <div className="buttonTab open" id="tabs_1" onClick={()=> {tabButton(1)}} >Испания</div> 
          <div className="buttonTab" id="tabs_2" onClick={()=> {tabButton(2)}}>Испания</div> 
          <div className="buttonTab" id="tabs_3" onClick={()=> {tabButton(3)}}>Испания</div> 
          <div className="buttonTab" id="tabs_4" onClick={()=> {tabButton(4)}}>Испания</div> 
          <div className="buttonTab" id="tabs_5" onClick={()=> {tabButton(5)}}>Испания</div> 
          <div className="buttonTab" id="tabs_6" onClick={()=> {tabButton(6)}}>Испания</div> 
        </div>
        <div>
            <div className="card_panel open_tab" id="tab_1">
                <Card bestOffer={true}/>
                <Card bestOffer={false}/>
                <Card bestOffer={true}/>
            </div>
            <div className="card_panel " id="tab_2">
                <Card bestOffer={true}/>
                <Card bestOffer={true}/>
                <Card bestOffer={true}/>
            </div>
            <div className="card_panel " id="tab_3">
                <Card bestOffer={false}/>
                <Card bestOffer={false}/>
                <Card bestOffer={true}/>
            </div>            
            <div className="card_panel " id="tab_4">
                <Card bestOffer={false}/>
                <Card bestOffer={false}/>
                <Card bestOffer={false}/>
            </div>
            <div className="card_panel " id="tab_5">
                <Card bestOffer={true}/>
                <Card bestOffer={false}/>
                <Card bestOffer={false}/>
            </div>
            <div className="card_panel " id="tab_6">
                <Card bestOffer={true}/>
                <Card bestOffer={false}/>
                <Card bestOffer={true}/>
            </div>
        </div>
        </div>
    </div>
  );
}

export default EmotionsMore;
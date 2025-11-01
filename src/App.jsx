import { useState } from 'react';
import './App.css'
import iconBlock from './img/Block_icon.png'
import iconList from './img/List_icon.png'

function App() {
 
  const [icon, setIcon] = useState("view_list")
  
  const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
        }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
        }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
        }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
        }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
        }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }]


  return (
    <div className="container">
      <div className="window">
        <div className="store-window">
          <IconSwitch icon={icon} setIcon={setIcon} />
        </div>
        <div className="store-container">
          {icon === "view_list" ? <CardsView cards={products} /> : <ListView cards={products} />}
        </div>
      </div>
    </div>
  )
}

function IconSwitch({ icon, setIcon} ) {
  const onSwitch = e => {
    console.log(e.target.textContent);
    const newIcon = icon === "view_list" ? "view_card" : "view_list";
    setIcon(newIcon);
  }

  const iconImg = icon === "view_list" ? iconList : iconBlock
  
  return (
    <div className="toolbar-container">
      <button onClick={onSwitch} className="switch-button">
        <img src={iconImg} className="switch-icon" />
      </button>
    </div>
  )
};

function CardsView({ cards }) {
  return(
    <div className="card-position">
      {cards.map(card => (
        ShopCard(card)
      ))}
    </div>
  );
}

function ShopCard(card) {
    return(
      <div className="item-card">
        <div className="card-name">{card.name}</div>
        <div className="card-color">{card.color}</div>
        <img className="card-img" src={card.img}/>
        <div className="footer-card">
          <div className="card-price">${card.price}</div>
          <div className="card-add">В корзину</div>
        </div>
      </div>
    );
  }

function ListView({ cards }) {
    return(
      <div className="list-position">
        {cards.map(item => (
          ShopItem(item)
        ))}
      </div>
    );
  }

function ShopItem(card) {
    return(
      <div className="item-list">
        <img className="item-img" src={card.img}/>
        <div className="card-name">{card.name}</div>
        <div className="card-color">{card.color}</div>
        <div className="card-price">${card.price}</div>
        <div className="card-add">В корзину</div>
      </div>
    );
  }


export default App
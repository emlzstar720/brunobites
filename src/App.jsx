import { useState } from 'react'
import { FaStar } from "react-icons/fa";
import bearNoodle from "./assets/bearnoodle.png";
import bearSkewer from "./assets/bearskewer.png";
import './App.css'


function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home">
        <span className="brand-mark">🍽️</span>
        Bruno Bites 
      </a>
    </header>
  );
}

function StarRating() {
  const [rating, setRating] = useState(0)

  function handleClick(value) {
    if (rating == value){
      setRating(0)
    } else{
      setRating(value)
    }
  }

  return (
    <div>
      {[1, 2, 3, 4, 5].map((index) => (
          <FaStar
            key = {index}
            size = {24}
            color = {index <= rating ? "yellow" : "gray"}
              onClick = {() => 
                {console.log("clicked star", index)
                handleClick(index)}}
          />
        ))}
    </div>
  )
}

function RestaurantSquare({name, location, dish, category}) {
  const [favorited, setFavorite] = useState(false);

  function changeFavorite() {
    setFavorite(prev => !prev);
  }

  return(
    <article className = "restaurant-square">
      <div className = "square-top">
      </div>

      <h3>{name}</h3>

      <p className = "category">{category}</p>

      <p className = "location">{location}</p>
      <p className = "dishName">{dish}</p>
      <p className = "review">
        <textarea
            className = "reviewSection"
            placeholder = "Add a review!"
        ></textarea>
      </p>
      
      <section className = "bottomRow">
        <StarRating />
        <div className = "square-bottom">
        <button
        type = "button"
        className = "favorited-button"
        onClick = {changeFavorite}
        >
          {favorited ? '❤️' : '♡'}
        </button>
      </div>
    </section>
    </article>
    )
}



  function App() {
  return (
    <div id = "home">
      <Header />
      <main>
        <section className = "intro">
          <img src = {bearNoodle} alt = "bear eating noodles" className = "bearNoodle" />
          <h1 id = "intro-title"> The hub for all eats <br/> @ Brown University <br/> ฅ՞•ﻌ•՞ฅ </h1>
          <img src = {bearSkewer} alt = "bear eating skewers" className = "bearSkewer" />
        </section>

        <section className = "wantToTry">
          <h2> <i> Want to Try: </i></h2>
          <textarea
            className = "wantToTrySection"
            placeholder = "Add restaurants!"
           ></textarea>
        </section>
      
        <section className = "galleryTitle">
          <h1> Restaurant Gallery: </h1>
        </section>


        <div className = "restaurant-grid">
          <RestaurantSquare
          name = "The Ratty"
          location = "144 Thayer Street"
          dish = "Vanilla Soft Serve"
          category = "Dining Hall" 
        />

        <RestaurantSquare
          name = "Andrews Commons"
          location = "211 Bowen Street"
          dish = "Dry Noodle Bowl"
          category = "Dining Hall" 
        />

        <RestaurantSquare
          name = "Blue Room"
          location = "75 Waterman Street"
          dish = "Yogurt Bowl"
          category = "Dining Cafe" 
        />

        <RestaurantSquare
          name = "Ivy Room"
          location = "Lower Level, 144 Thayer St"
          dish = "Smoothie"
          category = "Dining Hall" 
        />

        <RestaurantSquare
          name = "V-Dub"
          location = "135 Cushing Street"
          dish = "Omelette"
          category = "Dining Hall" 
        />

        <RestaurantSquare
          name = "Josiah's"
          location = "Gregorian Quad A, 114 Power St"
          dish = "Milkshake"
          category = "Dining Hall" 
        />

        <RestaurantSquare
          name = "Den Den Chicken"
          location = "185 Angell Street"
          dish = "Korean Fried Chicken"
          category = "Asian Cuisine"
        />

        <RestaurantSquare
          name = "Ten One Tea House"
          location = "216 Thayer Street"
          dish = "Brown Sugar Boba"
          category = "Bubble Tea" 
        />

        <RestaurantSquare
          name = "Jahunger"
          location = "216 Thayer Street"
          dish = "Honey Cake"
          category = "Asian Cuisine" 
        />
        </div>
      </main>

    <footer className = "site-footer">
      <span> Created by Emma Liu for 2026 Full Stack @ Brown Developer Application</span>
      <p>
        Please note that selections will be reset after refreshing the page. 
      </p>
    </footer>
    </div>
  
  );
}


export default App;


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);

  const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improving air quality.", cost: "$15" },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene from the air.", cost: "$12" },
        { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg", description: "Removes mold spores and purifies air.", cost: "$18" },
        { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Adds humidity to the room and purifies air.", cost: "$14" },
        { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", description: "Easy to grow and effective at removing toxins.", cost: "$20" },
        { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/09/17/aloe-vera-3283344_1280.jpg", description: "Purifies air and offers medicinal benefits.", cost: "$10" }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://cdn.pixabay.com/photo/2015/07/02/10/22/lavender-828911_1280.jpg", description: "Calming scent, used in aromatherapy.", cost: "$22" },
        { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2018/01/08/17/30/jasmine-3069822_1280.jpg", description: "Sweet fragrance, promotes relaxation.", cost: "$19" },
        { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Invigorating aroma, perfect for culinary use.", cost: "$15" },
        { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/26/18/16/mint-1163013_1280.jpg", description: "Refreshing scent, ideal for teas and beverages.", cost: "$11" },
        { name: "Eucalyptus", image: "https://cdn.pixabay.com/photo/2018/01/26/08/33/eucalyptus-3108079_1280.jpg", description: "Fresh, soothing scent that aids breathing.", cost: "$17" },
        { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2017/05/18/07/42/lemon-balm-2322744_1280.jpg", description: "Citrusy aroma, helps reduce stress.", cost: "$13" }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        { name: "Echinacea", image: "https://cdn.pixabay.com/photo/2014/12/03/10/00/coneflower-555231_1280.jpg", description: "Boosts immunity and helps fight colds.", cost: "$16" },
        { name: "Peppermint", image: "https://cdn.pixabay.com/photo/2017/07/07/12/46/mint-2481358_1280.jpg", description: "Relieves digestive discomfort and headaches.", cost: "$12" },
        { name: "Chamomile", image: "https://cdn.pixabay.com/photo/2016/08/16/17/12/chamomile-1598463_1280.jpg", description: "Promotes sleep and reduces anxiety.", cost: "$14" },
        { name: "Calendula", image: "https://cdn.pixabay.com/photo/2019/07/04/18/48/marigold-4317134_1280.jpg", description: "Heals skin irritations and wounds.", cost: "$15" },
        { name: "Thyme", image: "https://cdn.pixabay.com/photo/2017/06/15/10/18/thyme-2404746_1280.jpg", description: "Antimicrobial properties, aids digestion.", cost: "$11" },
        { name: "Holy Basil (Tulsi)", image: "https://cdn.pixabay.com/photo/2020/09/27/10/11/tulsi-5606367_1280.jpg", description: "Adaptogenic herb that fights stress.", cost: "$18" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      {/* Navbar que permanece visível */}
      <nav className="navbar">
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/ecc-5465451_1280.png" alt="" style={{ width: '50px', height: '50px' }} />
            <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
              <div>
                <h3 style={{ margin: 0 }}>Paradise Nursery</h3>
                <i style={{ fontSize: '0.8rem' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div className="nav-links">
          <a href="#" onClick={handlePlantsClick} className="nav-link">Plants</a>
          <a href="#" onClick={handleCartClick} className="nav-link cart-icon-container">
            <h1 className="cart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="40" width="40">
                <rect width="256" height="256" fill="none"></rect>
                <path d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                <circle cx="80" cy="204" r="20" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                <circle cx="184" cy="204" r="20" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                <path d="M62.5,144H188.1a8,8,0,0,0,7.8-6.1l18.4-73.8a8,8,0,0,0,-7.8-9.9H53.1" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
              </svg>
              <span className="cart_quantity_count">{totalCartQuantity}</span>
            </h1>
          </a>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((categoryObj, index) => (
            <div key={index} className="category-section">
              <h1 className="category-title">{categoryObj.category}</h1>
              <div className="product-list">
                {categoryObj.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <p className="product-description">{plant.description}</p>
                    <div className="product-cost">{plant.cost}</div>
                    <button
                      className={`product-button ${addedToCart[plant.name] || cartItems.some(item => item.name === plant.name) ? 'disabled' : ''}`}
                      disabled={addedToCart[plant.name] || cartItems.some(item => item.name === plant.name)}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {addedToCart[plant.name] || cartItems.some(item => item.name === plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;

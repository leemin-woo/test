import './App.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const data = document.getElementById('box-content').getBoundingClientRect();
    const top = Math.round(data.height/3);
    if(data) {
      const count = document.querySelectorAll('#id-App').length;
      for(let i = 0; i < count; i++) {
        document.querySelectorAll('#id-App')[i].style.top = top + 'px';
        document.querySelectorAll('#id-Box')[i].style.top = top + 'px';
      }
    }
    
}, []);
  return (
    <div className="App">
      <header className="App-header">
        <span className="App-header-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM13.5898 18L7.58984 12L13.5898 6L14.9998 7.41L10.4198 12L14.9998 16.59L13.5898 18Z"
              fill="#7F828E"
            />
          </svg>
        </span>
        <h2 className="App-header-title">Silver Tier</h2>
        <p className="App-header-content">In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.</p>
      </header>
      <div id='box-content' className="box-content">
        <p className="box-content-title">Available Coin balance</p>
        <h1 className="box-number">340</h1>
        <div className="progress">
          <span className="progress-bar" style={{width: "75%"}}></span>
        </div>
        <p className="App-header-content" style={{color: '#92929D'}}>You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.</p>
        <p className="box-content-title" style={{color: '#0062FF'}}>View tier benefits</p>
        <button className="button">My Coupons</button>
        <p className="App-header-content" style={{fontSize: "14px", textAlign: "center"}}>Updated : 02/11/2021</p>
      </div>
      <h4 id={'id-App'} className="App-title">Petrol</h4>
      <div id={'id-Box'} className="arr-box-container">
        <div className="arr-box">
          <img src={'https://cdn-dcncg.nitrocdn.com/hZlJZkFgFTscnjzZTAIxXLTgJQqkKAnh/assets/static/optimized/rev-f8685cf/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg'} alt="DigiNet" className={'img'} />
          <div style={{paddingLeft: "24px"}}>
            <p className="box-content-title" style={{color: '#0062FF', fontWeight: "600"}}>15 Coins</p>
            <p className="App-header-content" style={{color: '#92929D'}}>50% discount for every $100 top-up on your Shell Petrol Card</p>
          </div>
        </div>
        <div className="arr-box">
          <img src={'https://cdn-dcncg.nitrocdn.com/hZlJZkFgFTscnjzZTAIxXLTgJQqkKAnh/assets/static/optimized/rev-f8685cf/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg'} alt="DigiNet" className={'img'} />
          <div style={{paddingLeft: "24px"}}>
            <p className="box-content-title" style={{color: '#696974', fontWeight: "600"}}>1,000 Coins</p>
              <p className="box-content-title" style={{color: '#92929D'}}>70% discount top-up on your Shell Petrol Card</p>
              <p className="box-content-title" style={{color: '#0062FF'}}>Insufficient coins</p>
          </div>
        </div>
      </div>
      <h4 id={'id-App'} className="App-title">Rental Rebate</h4>
      <div id={'id-Box'} className="arr-box-container">
        <div className="arr-box">
          <img src={'https://cdn-dcncg.nitrocdn.com/hZlJZkFgFTscnjzZTAIxXLTgJQqkKAnh/assets/static/optimized/rev-f8685cf/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg'} alt="DigiNet" className={'img'} />
          <div style={{paddingLeft: "24px"}}>
            <p className="box-content-title" style={{color: '#0062FF', fontWeight: "600"}}>20 Coins</p>
            <p className="box-content-title" style={{color: '#92929D'}}>Get $20 Rental rebate</p>
          </div>
        </div>
        <div className="arr-box">
          <img src={'https://cdn-dcncg.nitrocdn.com/hZlJZkFgFTscnjzZTAIxXLTgJQqkKAnh/assets/static/optimized/rev-f8685cf/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg'} alt="DigiNet" className={'img'} />
          <div style={{paddingLeft: "24px"}}>
            <p className="box-content-title" style={{color: '#0062FF', fontWeight: "600"}}>15 Coins</p>
            <p className="box-content-title" style={{color: '#92929D'}}>Get $500 Rental rebate</p>
          </div>
        </div>
      </div>
      <h4 id={'id-App'} className="App-title">Food and Beverage</h4>
      <div id={'id-Box'} className="arr-box-container">
        <div className="arr-box">
          <img src={'https://cdn-dcncg.nitrocdn.com/hZlJZkFgFTscnjzZTAIxXLTgJQqkKAnh/assets/static/optimized/rev-f8685cf/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg'} alt="DigiNet" className={'img'} />
          <div style={{paddingLeft: "24px"}}>
            <p className="box-content-title" style={{color: '#0062FF', fontWeight: "600"}}>25 Coins</p>
            <p className="box-content-title" style={{color: '#92929D'}}>NTUC Fairprice $50 Voucher</p>
          </div>
        </div>
        <div className="arr-box">
          <img src={'https://cdn-dcncg.nitrocdn.com/hZlJZkFgFTscnjzZTAIxXLTgJQqkKAnh/assets/static/optimized/rev-f8685cf/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg'} alt="DigiNet" className={'img'} />
          <div style={{paddingLeft: "24px"}}>
            <p className="box-content-title" style={{color: '#0062FF', fontWeight: "600"}}>5 Coins</p>
            <p className="box-content-title" style={{color: '#92929D'}}>Free Cold Stone Sundae at any flavour!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import { BiBitcoin } from "react-icons/bi";
import { useState, useEffect } from 'react';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  if (width > 320) {
    return (
      <div className="App">
        <div className='desktop-wrapper'>
          <div className="header-main">
            <div className="crypto-header">DO YOU WANT TO LEARN MORE ABOUT CRYPTOCURRENCIES</div>
            <div className="quick-header">QUICKLY AND EASILY ?</div>
          </div>
          <div className="subscribe-header">Subscribe to our channel to learn more</div>
          <div className="advantages-main">
            <div className="subscribers">
              <div className="amount-sub">20K+</div>
              <div className="sub-name">subscribers</div>
            </div>
            <div className="cases">
              <div className="amount-cases">19.5K</div>
              <div className="cases-name">succesful cases</div>
            </div>
            <div className="rating">
              <div className="rating-quantity">4.8/5</div>
              <div className="rating-name">rating</div>
            </div>
          </div>
          <div className="join-wrapper">
            <div className="join-text">join whatsapp</div>
          </div>
          <div className="google-play-link">
            <div className="play-icon">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.9315 19.6597L13.1307 14.4673L11.1555 12.2797L3.9315 19.6597ZM0.571502 0.547303C0.464702 0.736903 0.399902 0.955303 0.399902 1.1977V19.3477C0.399902 19.6837 0.525902 19.9717 0.715502 20.1997L9.8679 10.8517L0.571502 0.547303ZM18.9759 9.3781L15.7683 7.5673L12.5019 10.9045L14.8431 13.5001L18.9759 11.1685C19.1467 11.0837 19.2935 10.9573 19.4025 10.8008C19.5116 10.6443 19.5795 10.4629 19.5999 10.2733C19.5795 10.0837 19.5116 9.90227 19.4025 9.74581C19.2935 9.58935 19.1467 9.46289 18.9759 9.3781ZM14.0379 6.5905L2.9739 0.345703L11.2131 9.4777L14.0379 6.5905Z" fill="#F2F2F2" fillOpacity="0.4"/>
              </svg>
            </div>
            <div className="play-text-wrapper">
              <div className="play-text1">get it on</div>
              <div className="play-text2">Google play</div>
            </div>
          </div>
          <div className="app-store-link">
            <div className="app-icon">
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.0768 15.634C18.5812 16.7332 18.3424 17.224 17.704 18.196C16.8136 19.552 15.556 21.2416 13.9996 21.256C12.6172 21.268 12.262 20.356 10.384 20.3668C8.50717 20.3764 8.11597 21.2728 6.73238 21.2596C5.17598 21.2452 3.98438 19.72 3.09278 18.3628C0.600376 14.5708 0.339975 10.1188 1.87718 7.75125C2.96918 6.07005 4.69358 5.08605 6.31358 5.08605C7.96358 5.08605 9.00157 5.99085 10.3648 5.99085C11.6884 5.99085 12.4948 5.08365 14.4028 5.08365C15.8428 5.08365 17.3716 5.86965 18.46 7.22565C14.8936 9.18045 15.472 14.2732 19.0768 15.634ZM12.9556 3.56925C13.648 2.67885 14.1748 1.42365 13.984 0.139648C12.8512 0.217648 11.5276 0.937648 10.7536 1.87725C10.0528 2.72925 9.47318 3.99285 9.69758 5.22165C10.9336 5.25885 12.2128 4.52085 12.9556 3.56925Z" fill="#F2F2F2" fillOpacity="0.4"/>
              </svg>
            </div>
            <div className="app-text-wrapper">
              <div className="app-text1">Available on the</div>
              <div className="app-text2">App Store</div>
            </div>
          </div>
          <div className="review-1-main">
            <div className="user-1-info">
              <div className="user-photo-1"></div>
              <div className="user-text-info-1">
                <div className="user-text-1-1">lorenzo</div>
                <div className="user-text-1-2">@lorenzoo</div>
              </div>
            </div>
            <div className="user-review-1-text">Amazing Telegram bot! Provides real-time crypto prices and news</div>
          </div>
          <div className="review-2-main">
            <div className="user-2-info">
              <div className="user-photo-2"></div>
              <div className="user-text-info-2">
                <div className="user-text-2-1">Adalina</div>
                <div className="user-text-2-2">@ada</div>
              </div>
            </div>
            <div className="user-review-2-text">Must-have bot for crypto traders. Accurate signals and analysis</div>
          </div>
          <div className="review-3-main">
            <div className="user-3-info">
              <div className="user-photo-3"></div>
              <div className="user-text-info-3">
                <div className="user-text-3-1">alexander</div>
                <div className="user-text-3-2">@alex_x</div>
              </div>
            </div>
            <div className="user-review-3-text">Superb cryptocurrency bot! Quick updates and reliable data</div>
          </div>
          <div className="review-4-main">
            <div className="user-4-info">
              <div className="user-photo-4"></div>
              <div className="user-text-info-4">
                <div className="user-text-4-1">rushana</div>
                <div className="user-text-4-2">@Hana</div>
              </div>
            </div>
            <div className="user-review-4-text">Efficient and user-friendly bot. Simplifies crypto trading tasks</div>
          </div>
          <div className="bitcoin-icon">
            <div className="bitcoin">
              <BiBitcoin className='bibitcoin'/>
            </div>
          </div>
          <div className='litecoin-icon'>
            <div className='litecoin'></div>
          </div>
          <div className='ethereum-icon'>
            <div className='ethereum'></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='App'>
        <div className='mobile-response'>
          <div className="mb-text-header">
            <span className='text-1-1'>Do you want to learn more about</span> <span className='crypto-text'>cryptocurrencies <span className='text-1-3'>quickly and easily?</span></span>
          </div>
          <div className='mt-text-header-2'>Subscribe to our channel to learn more</div>
          <div className='advantages-wrapper-mb'>
            <div className='sub-main-mb'>
              <div className='sub-amount-mb'>20k+</div>
              <div className='sub-name-mb'>subscribers</div>
            </div>
            <div className='cases-main-mb'>
              <div className='cases-amount-mb'>19.5K</div>
              <div className='cases-name-mb'>succesful cases</div>
            </div>
            <div className='rating-main-mb'>
              <div className='rating-amount-mb'>4.8/5</div>
              <div className='rating-name-mb'>rating</div>
            </div>
          </div>
          <button className='join-whatsapp-mb'>Join whatsapp</button>
          <div className='link-to-apps-mb'>
            <div className='link-to-google-paly-main'>
              <div className='GP-icon-mb'>
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.943 17.0501L10.609 12.7231L8.963 10.9001L2.943 17.0501ZM0.143 1.12308C0.0539999 1.28108 0 1.46308 0 1.66508V16.7901C0 17.0701 0.105 17.3101 0.263 17.5001L7.89 9.71008L0.143 1.12308ZM15.48 8.48208L12.807 6.97308L10.085 9.75408L12.036 11.9171L15.48 9.97408C15.6224 9.90342 15.7446 9.79804 15.8355 9.66766C15.9264 9.53728 15.983 9.3861 16 9.22808C15.983 9.07006 15.9264 8.91888 15.8355 8.7885C15.7446 8.65812 15.6224 8.55273 15.48 8.48208ZM11.365 6.15908L2.145 0.955078L9.011 8.56508L11.365 6.15908Z" fill="#F2F2F2" fillOpacity="0.4"/>
                </svg>
              </div>
              <div>
                <div className='GP-text-1-mb'>get it on</div>
                <div className='GP-text-2-mb'>Google play</div>
              </div>
            </div>
            <div className='link-to-app-store-main'>
              <div className='AS-icon-mb'>
                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5638 13.8622C15.1508 14.7782 14.9518 15.1872 14.4198 15.9972C13.6778 17.1272 12.6298 18.5352 11.3328 18.5472C10.1808 18.5572 9.88482 17.7972 8.31982 17.8062C6.75582 17.8142 6.42982 18.5612 5.27682 18.5502C3.97982 18.5382 2.98682 17.2672 2.24382 16.1362C0.166817 12.9762 -0.0501832 9.26619 1.23082 7.29319C2.14082 5.8922 3.57782 5.0722 4.92782 5.0722C6.30282 5.0722 7.16782 5.8262 8.30382 5.8262C9.40682 5.8262 10.0788 5.0702 11.6688 5.0702C12.8688 5.0702 14.1428 5.72519 15.0498 6.8552C12.0778 8.48419 12.5598 12.7282 15.5638 13.8622ZM10.4628 3.8082C11.0398 3.0662 11.4788 2.0202 11.3198 0.950195C10.3758 1.0152 9.27282 1.6152 8.62782 2.3982C8.04382 3.1082 7.56082 4.1612 7.74782 5.18519C8.77782 5.2162 9.84382 4.60119 10.4628 3.8082Z" fill="#F2F2F2" fillOpacity="0.4"/>
                </svg>
              </div>
              <div>
                <div className='AS-text-1-mb'>git it on</div>
                <div className='AS-text-2-mb'>App Store</div>
              </div>
            </div>
          </div>
          <div className='bitcoin-icon-mb'>
            <BiBitcoin className='bibitcoin-mb'/>
          </div>
          <div className='litecoin-icon-mb'>
            <div className='litecoin-mb'></div>
          </div>
          <div className='ethereum-icon-mb'>
            <div className='ethereum-mb'></div>
          </div>
        </div>
      </div>
    )
  }

  
}

export default App;

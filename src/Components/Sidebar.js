import OpenTradeIcon from "../img/icons/OpenTrades.svg";
import ArrowRightIcon from "../img/icons/ArrowRight.svg";
import Prediction from "../img/icons/Prediction.svg";
import Wallet from "../img/icons/Wallet.svg";
import OpenTradeChart from "./Chart/OpenTradeChart";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="trades">
        <div className="sidebar__header">
          <div className="sidebar__header--left">
            <img src={OpenTradeIcon} alt="open trades icon" />
            <span>Trading History</span>
          </div>
          <a className="sidebar__header--right" href="/">
            <img src={ArrowRightIcon} alt="arrow icon" />
          </a>
        </div>
        <div className="trades__body">
          <div className="trades__progress">
            <span className="sidebar-heading">Trade in progress</span>
            <span className="value value-bold">15</span>
          </div>
          <div className="trades__outcome">
            <span className="sidebar-heading">Closest outcome</span>
            <span className="value value-bold">25m 40s</span>
            <span className="value value-thin">ETH 48 hour</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="history">
        <div className="sidebar__header">
          <div className="sidebar__header--left">
            <img src={Prediction} alt="Prediction icon" />
            <span>Open Trades</span>
          </div>
          <a className="sidebar__header--right" href="/">
            <img src={ArrowRightIcon} alt="arrow right icon" />
          </a>
        </div>
        <div className="history__nav">
          <li>
            <a href="/">Last</a>
          </li>
          <li>
            <a href="/">day</a>
          </li>
          <li>
            <a href="/" className="link-active">
              week
            </a>
          </li>
          <li>
            <a href="/">month</a>
          </li>
          <li>
            <a href="/">all</a>
          </li>
        </div>
        <div className="history__body">
          <div className="history__trades">
            <span className="sidebar-heading">Total trades</span>
            <span className="value value-bold">245</span>
          </div>
          <div className="history__profit">
            <span className="sidebar-heading">Profit</span>
            <span className="value value-bold">+21.5%</span>
          </div>
        </div>
        {/* <canvas id="openrate-chart" /> */}
        <OpenTradeChart />
      </div>
      <hr />
      <div className="wallet">
        <div className="sidebar__header">
          <div className="sidebar__header--left">
            <img src={Wallet} alt="Wallet icon" />
            <span>Wallet</span>
          </div>
          <a className="sidebar__header--right" href="/">
            <img src={ArrowRightIcon} alt="arrow icon" />
          </a>
        </div>
        <div className="wallet__body">
          <div className="wallet__trading">
            <div className="wallet__trading__data">
              <span className="sidebar-heading">Trading</span>
              <span className="value value-bold">$ 34,752.00</span>
            </div>
            <a className="wallet__btn wallet__btn-1" href="/">
              TOP UP
            </a>
          </div>
          <div className="wallet__holding">
            <div className="wallet__holding__data">
              <span className="sidebar-heading">Holding</span>
              <span className="value value-bold">$ 4, 102.00</span>
            </div>
            <a className="wallet__btn wallet__btn-2" href="/">
              BUY DAI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;

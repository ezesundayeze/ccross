import TradeCharts from "./Chart/TradeChart";
const Home = () => {
  return (
    <section className="home">
      <div className="home__top-bar">
        <div className="home__top-bar--left">
          <span className="comman-text-style">
            Select assets, types and period:
          </span>
          <a href="/" className="filter__btn">
            Filter
          </a>
        </div>
        <div className="home__top-bar--right">
          <div className="units">
            <span className="comman-text-style">Units:</span>
            <div className="home__top-gtn-grp">
              <input
                type="radio"
                name="unit"
                id="percent"
                defaultValue="percent"
                hidden
              />
              <label htmlFor="percent">%</label>
              <input
                type="radio"
                name="unit"
                id="dollar"
                defaultValue="dollar"
                hidden
                defaultChecked
              />
              <label htmlFor="dollar">$</label>
            </div>
          </div>
          <div className="sort">
            <span className="comman-text-style">Sort by</span>
            <select name="sort-by" id="sort">
              <option value="Treading" selected>
                Treading
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="home__states">
        <TradeCharts />
      </div>
    </section>
  );
};

export default Home;

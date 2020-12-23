import React, { useEffect, useState } from "react";
import YellowStar from "../../img/icons/YellowStar.svg";
import Arrow from "../../img/icons/Arrow.svg";
import { Line } from "react-chartjs-2";
import { data, options } from "./ChartData"; // assuming this data is coming from an API

const TradeChart = () => {
  const [tradeData, setTradeData] = useState({});
  const [status, setStatus] = useState(false);

  const chart = (data) => {
    setTradeData(data);
    setStatus(true);
  };

  useEffect(() => {
    chart(data);
  }, []);

  if (status) {
    return tradeData.map((chart) => {
      return (
        <>
          <div className="home__states--card">
            <div className="left">
              <img src={YellowStar} alt="Staricon" className="left-icon" />
              <div className="left-text">
                <h3 className="heading--3">ETH 48 hours</h3>
                <span className="comman-text-style">Crypto</span>
              </div>
            </div>
            <div className="center">
              <div className="center__outcome">
                <div className="center__outcome--text">
                  <img src={Arrow} alt="icon" />
                  <p>2,2x</p>
                </div>
                <span className="comman-text-style">Outcome in 6h 41m</span>
              </div>
              <div className="chart__container-hz">
                <Line
                  id="chrt-hrz-1"
                  data={chart.horizontal}
                  options={options}
                />
              </div>
              <div className="chart__container-vt">
                <Line
                  id="chrt-vert-1"
                  data={chart.vertical}
                  options={options}
                />
              </div>
            </div>
            <div className="right">
              <span className="value value-bold">$ {chart.funds}</span>
              <span className="comman-text-style">Total commitment funds</span>
            </div>
          </div>
        </>
      );
    });
  } else {
    return "No Data at the moment";
  }
};

export default TradeChart;

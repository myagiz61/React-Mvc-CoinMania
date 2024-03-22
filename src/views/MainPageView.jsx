import React from "react";
import millify from "millify";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import LoadMoreController from "../controllers/LoadMoreController";
const MainPageView = ({ coins }) => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      {!coins && <Loading />}

      {coins && (
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>coin</th>
              <th>fiyat</th>
              <th>market hacmi</th>
              <th>%değişim (24s)</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, i) => (
              <tr
                key={i}
                onClick={() => navigate(`/coin/${coin.uuid}`)}
              >
                <td>{i}</td>
                <td>
                  <span className="text-warning me-1 fw-bold">
                    {coin.symbol}
                  </span>
                  <span>{coin.name}</span>
                </td>
                <td>{millify(coin.price)}</td>
                <td>{millify(coin.marketCap)}</td>
                <td>%{millify(coin.change)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <LoadMoreController />
    </div>
  );
};

export default MainPageView;

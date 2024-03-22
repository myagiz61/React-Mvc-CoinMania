import React, { useEffect, useState } from "react";
import MainPageView from "./../views/MainPageView";
import axios from "axios";
import { options } from "./../constant/constant";
import { useSearchParams } from "react-router-dom";
const MainPageController = () => {
  const [coins, setCoins] = useState([]);
  const [params, setParams] = useSearchParams();
  useEffect(() => {
    const page = params.get("page");

    if (!page) {
      setParams({ page: "1" });
    }
    axios
      .get(
        `https://coinranking1.p.rapidapi.com/coins/?limit=60&offset=${page}`,
        options
      )
      .then((res) => setCoins([...coins, ...res.data.data.coins]));
  }, [params]);
  return <MainPageView coins={coins} />;
};

export default MainPageController;

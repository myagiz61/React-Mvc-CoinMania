import { useEffect, useState } from "react";
import DetailView from "../views/DetailView";
import { useParams } from "react-router-dom";
import axios from "axios";
import { options } from "./../constant/constant";
import { InfoLabel } from "./../model/DetailModel";

const DetailController = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [history, setHistory] = useState(null);

  useEffect(() => {
    axios
      .get(`https://coinranking1.p.rapidapi.com/coin/${id}`, options)
      .then((res) => setCoin(res.data.data));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://coinranking1.p.rapidapi.com/coin/${id}/history`,
        options
      )
      .then((res) => setHistory(res.data.data.history));
  }, []);

  //   model'den class'ından bir örnek oluşturma
  const model = new InfoLabel(coin, history);
  console.log(model);

  return <DetailView model={model} />;
};

export default DetailController;

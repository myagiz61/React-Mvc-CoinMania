import { SiCoinmarketcap } from "react-icons/si";
import { FaPercent } from "react-icons/fa";
import { MdPriceChange, MdEventAvailable } from "react-icons/md";

export class InfoLabel {
  constructor(coin, history) {
    this.coin = coin;

    console.log(history);
    // arayüz kutuları için veriyi hazırla
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Hacmi",
        value: this.coin?.coin.marketCap,
      },
      {
        icon: <MdEventAvailable />, // Supply için bir icon ekleyebilirsiniz
        label: "Supply",
        value: this.coin?.coin.supply.supplyAt,
      },
      {
        icon: <MdPriceChange />, // Price için bir icon ekleyebilirsiniz
        label: "Fiyat (USD)",
        value: this.coin?.coin.price,
      },
      {
        icon: <FaPercent />, // 24 saatlik değişim için bir icon ekleyebilirsiniz
        label: "24 Saatlik Değişim (%)",
        value: this.coin?.coin.change,
      },
    ];

    // grafik için veriyi hazırla
    this.chartData = {
      labels: history?.map((i) =>
        new Date(i.timestamp).toLocaleDateString()
      ),
      datasets: [
        {
          label: "Fiyat Değeri",
          data: history?.map((i) => Number(i.price).toFixed(2)),
        },
      ],
    };
  }
}

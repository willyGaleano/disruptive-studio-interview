import { useEffect, useState } from "react";
import cryptoCalculatorRequests from "../../infrastructure/api/crypto-calculator.request";
import { AssetsList } from "../dto";

export const useGetAssestsCalculator = () => {
  const [cryptoList, setCryptoList] = useState<AssetsList[]>([]);   

  useEffect(() => {
    (async () => {
      const {data} = await cryptoCalculatorRequests.getListAssets();
      setCryptoList(data);
    })();
  }, []);

  return [cryptoList];
};


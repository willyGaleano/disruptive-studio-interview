import { Button, Label, Select, TextInput } from "flowbite-react";
import { useGetAssestsCalculator } from "../../application/hooks/useGetAssetsCalculator";
import { useState } from "react";
import { AssetsList, AssetsTableData } from "../../application/dto";

interface Props {
  cryptoData: AssetsTableData[];
}

export const Calculator: React.FC<Props> = ({ cryptoData })=> {

  const [cryptoList] = useGetAssestsCalculator();
  const [amount, setAmount] = useState<number>(0);
  const [selectedCrypto, setSelectedCrypto] = useState<AssetsList>({} as AssetsList);
  const [result, setResult] = useState<number>(0);

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));    
  };

  const submitCalculate = () => {
    const price_usd = cryptoData.find(crypto => crypto.id === selectedCrypto.id)?.price_usd as number;
    setResult((amount * price_usd) * selectedCrypto.percentage * 12);
  };

  const handleSelectOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") {
      return;
    }
    setAmount(0);
    setResult(0);
    setSelectedCrypto(cryptoList.find(crypto => crypto.id === e.target.value) as AssetsList);
  };

  return (
    <div className="flex flex-row gap-4">
      <div className="basis-4/12">
        <form className="flex flex-col gap-4">
          <div>
            <div id="select">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Select your currency" />
              </div>
              <Select onChange={handleSelectOptions} id="countries" required={true}>
                <option value="">Select a crypto</option>
                {cryptoList.map((crypto) => (
                  <option key={crypto.id} value={crypto.id}>{crypto.name} ({crypto.symbol})</option>
                ))}                
              </Select>
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="amount" value="Amount" />
            </div>
            <TextInput onChange={handleChangeAmount} id="amount" value={amount} type="number" required={true} />

          </div>
          <Button type="button" onClick={submitCalculate}>Calculate</Button>
        </form>
      </div>
      <div className="basis-4/12">
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 h-24 w-24 rounded-full shadow-lg"
            src={selectedCrypto.logo || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {selectedCrypto.name || "Select a crypto"}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Annual profit for a monthly return of {selectedCrypto.percentage *100 || 0 }%
            
          </span>
          <div className="mt-4 flex border rounded-md px-4 py-3">
           ${result.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

import { Dropdown } from "flowbite-react";
import Papa from "papaparse";
import { AssetsTableData } from "../../application/dto";

interface Props {
  cryptoData: AssetsTableData[];
}

const headerNames = [
  { id: 1, name: "ASSET", },
  { id: 2, name: "PRICE (USD)", },
  { id: 3, name: "CHANGE VS USD (1H)", },
  { id: 4, name: "CHANGE VS USD (24H)", },
  { id: 5, name: "7 DAY TREND", },
  { id: 6, name: "REPORTED MARKETCAP", },
  { id: 7, name: "REAL VOLUME (24H)", },
  { id: 8, name: "CHANGE VS USD (7D)", },
  { id: 9, name: "CHANGE VS USD (30D)", },
  { id: 10, name: "CHANGE VS USD (90D)", },
  { id: 11, name: "CHANGE VS USD (1Y)", },
  { id: 12, name: "CHANGE VS USD (YTD)", },
]

export const DataTable: React.FC<Props> = ({ cryptoData }) => {
  const formatColor = (value: number): string => {
    return value > 0 ? "text-green-500" : "text-red-600";
  };

  const formatNumber = (value: number): string => {
    return `${value > 0 ? "+" : ""}` + value.toFixed(2) + "%";
  };

  function handleDownloadCSV() {
    const csv = Papa.unparse(cryptoData);

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "assets.csv";
    link.click();
  }

  function handleDownloadJSON() {
    const jsonData = JSON.stringify(cryptoData);

    const blob = new Blob([jsonData], {
      type: "application/json;charset=utf-8;",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "assets.json";
    link.click();
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-end px-4 pt-4">
        <Dropdown label="Export" inline={true}>
          <Dropdown.Item onClick={handleDownloadCSV}>CSV</Dropdown.Item>
          <Dropdown.Item onClick={handleDownloadJSON}>JSON</Dropdown.Item>
        </Dropdown>
      </div>
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 text-center">
                <tr>
                  {headerNames.map((header) => (                  
                  <th
                    key={header.id}
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-gray-500 uppercase "
                  >
                    {header.name}
                  </th>
                  ))}
                 
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-center">
                {cryptoData &&
                  cryptoData.map((crypto) => (
                    <tr key={crypto.id}>
                      <td className="flex flex-row gap-2 items-center px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        <img src={crypto.logo} alt={crypto.name} />
                        {crypto.name}.{crypto.symbol}
                      </td>
                      <td
                        className={`px-6 py-4 text-sm text-gray-800  whitespace-nowrap`}
                      >
                        ${crypto.price_usd.toFixed(2)}
                      </td>
                      <td
                        className={`px-6 py-4 text-sm ${formatColor(
                          crypto.percent_change_usd_last_1_hour
                        )} whitespace-nowrap`}
                      >
                        {formatNumber(crypto.percent_change_usd_last_1_hour)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {crypto.percent_change_usd_last_24_hours.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        <img src={crypto.img_7d_day_trend} alt={crypto.name} />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        $
                        {crypto.current_marketcap_usd.toString().slice(0, 3) +
                          "B"}
                      </td>
                      <td
                        className={`px-6 py-4 text-sm text-gray-800 whitespace-nowrap`}
                      >
                        $
                        {crypto.real_volume_last_24_hours
                          .toString()
                          .slice(0, 3) + "B"}
                      </td>
                      <td
                        className={`px-6 py-4 text-sm ${formatColor(
                          crypto.percent_change_last_1_week
                        )} whitespace-nowrap`}
                      >
                        {formatNumber(crypto.percent_change_last_1_week)}
                      </td>
                      <td
                        className={`px-6 py-4 text-sm ${formatColor(
                          crypto.percent_change_last_1_month
                        )} whitespace-nowrap`}
                      >
                        {formatNumber(crypto.percent_change_last_1_month)}
                      </td>
                      <td
                        className={`px-6 py-4 text-sm ${formatColor(
                          crypto.percent_change_last_3_months
                        )} whitespace-nowrap`}
                      >
                        {formatNumber(crypto.percent_change_last_3_months)}
                      </td>
                      <td
                        className={`px-6 py-4 text-sm ${formatColor(
                          crypto.percent_change_last_1_year
                        )} whitespace-nowrap`}
                      >
                        {formatNumber(crypto.percent_change_last_1_year)}
                      </td>
                      <td
                        className={`px-6 py-4 text-sm ${formatColor(
                          crypto.percent_change_year_to_date
                        )} whitespace-nowrap`}
                      >
                        {formatNumber(crypto.percent_change_year_to_date)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

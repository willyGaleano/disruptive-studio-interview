import { Dropdown } from "flowbite-react";
import { AssetsTableData } from "../../application/dto";

interface Props {
  cryptoData: AssetsTableData[];
}

export const DataTable: React.FC<Props> = ({ cryptoData }) => {

  const formatColor = (value: number) : string => {
    return value > 0 ? "text-green-500" : "text-red-600";
  }

  const formatNumber = (value: number) : string => {
    return `${value > 0 ? '+': ''}`+ value.toFixed(2) + "%"
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-end px-4 pt-4">
        <Dropdown label="Export" inline={true}>
          <Dropdown.Item>CSV</Dropdown.Item>
          <Dropdown.Item>JSON</Dropdown.Item>
        </Dropdown>
      </div>
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 text-center">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-gray-500 uppercase "
                  >
                    ASSET
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-gray-500 uppercase "
                  >
                    PRICE (USD)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase "
                  >
                    CHANGE VS USD (1H)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase "
                  >
                    CHANGE VS USD (24H)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-gray-500 uppercase "
                  >
                    7 DAY TREND
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase "
                  >
                    REPORTED MARKETCAP
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase "
                  >
                    REAL VOLUME (24H)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase "
                  >
                    CHANGE VS USD (7D)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase "
                  >
                    CHANGE VS USD (30D)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase "
                  >
                    CHANGE VS USD (90D)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase "
                  >
                    CHANGE VS USD (1Y)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase "
                  >
                    CHANGE VS USD (YTD)
                  </th>
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
                        className={`px-6 py-4 text-sm ${formatColor(crypto.percent_change_usd_last_1_hour)} whitespace-nowrap`}
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
                        ${crypto.current_marketcap_usd.toString().slice(0, 3) + "B"}
                      </td>
                      <td className={`px-6 py-4 text-sm text-gray-800 whitespace-nowrap`}>
                        ${crypto.real_volume_last_24_hours.toString().slice(0, 3) + "B"}
                      </td>
                      <td className={`px-6 py-4 text-sm ${formatColor(crypto.percent_change_last_1_week)} whitespace-nowrap`}>
                        {formatNumber(crypto.percent_change_last_1_week)}
                      </td>
                      <td className={`px-6 py-4 text-sm ${formatColor(crypto.percent_change_last_1_month)} whitespace-nowrap`}>
                        {formatNumber(crypto.percent_change_last_1_month)}
                      </td>
                      <td className={`px-6 py-4 text-sm ${formatColor(crypto.percent_change_last_3_months)} whitespace-nowrap`}>
                        {formatNumber(crypto.percent_change_last_3_months)}
                      </td>
                      <td className={`px-6 py-4 text-sm ${formatColor(crypto.percent_change_last_1_year)} whitespace-nowrap`}>
                        {formatNumber(crypto.percent_change_last_1_year)}
                      </td>
                      <td className={`px-6 py-4 text-sm ${formatColor(crypto.percent_change_year_to_date)} whitespace-nowrap`}>
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

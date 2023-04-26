export type AssetsTableData = {
  id: string;
  logo: string;
  name: string;
  symbol: string;
  price_usd: number;
  percent_change_usd_last_1_hour: number;
  percent_change_usd_last_24_hours: number;
  img_7d_day_trend: string;
  current_marketcap_usd: number;
  real_volume_last_24_hours: number;
  percent_change_last_1_week: number;
  percent_change_last_1_month: number;
  percent_change_last_3_months: number;
  percent_change_last_1_year: number;
  percent_change_year_to_date: number;
};

export interface AssetsResponse {
  status: Status;
  data: DataAsset[];
}

export interface Status {
  elapsed: number;
  timestamp: string;
}

export interface DataAsset {
  id: string;
  name: string;
  symbol: string;
  metrics: Metrics;
}

export interface Metrics {
  market_data: MarketData;
  marketcap: Marketcap;
  roi_data: RoiData;
}

export interface MarketData {
  price_usd: number;
  percent_change_usd_last_1_hour: number;
  percent_change_usd_last_24_hours: number;
  real_volume_last_24_hours: number;
}

export interface Marketcap {
  current_marketcap_usd: number;
}

export interface RoiData {
  percent_change_last_1_week: number;
  percent_change_last_1_month: number;
  percent_change_last_3_months: number;
  percent_change_last_1_year: number;
  percent_change_year_to_date: number;
}

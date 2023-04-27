# DISRUPTIVE STUDIO INTERVIEW 🤖

Tecnologías utilizadas: 

<ol>
  <li>Nestjs</li>
  <li>Reactjs</li>
  <li>Tailwind</li>
  <li>Typescript</li>
  <li>Jest</li>  
</ol>


# Desarrollo 🚀

## Home

![home](/images/home.PNG)


El home muestra el formulario para calcular la ganancia anual y una tabla con datos
obtenidos de la api `https://data.messari.io/api`

La consulta solo con campos necesarios se vería así:

```bash
https://data.messari.io/api/v2/assets?limit=10&fields=id,name,symbol,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_1_hour,metrics/market_data/percent_change_usd_last_24_hours,metrics/marketcap/current_marketcap_usd,metrics/market_data/real_volume_last_24_hours,metrics/roi_data/percent_change_last_1_week,metrics/roi_data/percent_change_last_1_month,metrics/roi_data/percent_change_last_3_months,metrics/roi_data/percent_change_last_1_year,metrics/roi_data/percent_change_year_to_date

```

Para obtener el logo de cada criptomoneda: 

```bash
https://asset-images.messari.io/images/362f0140-ecdd-4205-b8a0-36f0fd5d8167/32.png?v=2

```

Para obtener el 7 day trend

```bash
https://data.messari.io/api/v1/assets/1e31218a-e44e-4285-820c-8282ee222035/metrics/market-data/history/sl.png?width=140&height=30

```





## Calculadora

Desarrollé un API para obtener la data que se listará en el input select para
calcular las ganancias anuales.


![api](/images/api.PNG)


Algunos ejemplos de la calculadora:

![calculate-bircoin](/images/calculateBitcoin.PNG)

![calculate-ETH](/images/calculateETH.PNG)

## Calculadora

Desde la parte superior derecha de la tabla se podrá exportar la data en CSV o JSON

![export-csv](/images/export-csv.PNG)

![export-json](/images/export-json.PNG)



# Local 🔧

## Backend

1. En la raiz del proyecto dirigirse a:

```bash
cd disruptive-ms
```

2. Instalar dependencias y crear el archivo .env

```bash
yarn
```

```bash
//.env

PORT=3000
```

3. Correr el servidor

```bash
yarn start:dev
```

4. Ejecutar pruebas unitarias

```bash
yarn test
```

## Client

1. En la raiz del proyecto dirigirse a:

```bash
cd client
```

2. Instalar dependencias y crear el archivo .env

```bash
yarn
```

```bash
//.env

VITE_MESSARI_URL_API=https://data.messari.io/api
VITE_MESSARI_API_KEY={tu-api-key-messari}
VITE_CRYPTO_CALCULATOR_API_URL=http://localhost:3000
```

3. Correr el servidor

```bash
yarn dev
```
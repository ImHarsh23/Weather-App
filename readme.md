# Weather App

This is a simple weather application built using Express.js that retrieves weather data from the OpenWeatherMap API and displays it to the user. It also integrates a JSON file as a database to retrieve additional assets related to weather conditions.

## Features

- **Weather Data**: Fetches current weather data based on the user's input city.
- **Dynamic Content**: Displays weather information dynamically based on the user's query.
- **Database Integration**: Retrieves additional assets related to weather conditions from a JSON file database.

## Installation

1. **Clone the repository**:

    ```bash
    git clone <repository_url>
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:
   
   Before running the application, make sure to set up the following environment variables:
   
   - `API_KEY`: Your OpenWeatherMap API key.
   
4. **Run the application**:

    ```bash
    node app.js
    ```

## Usage

1. Run the application as per the installation instructions.
2. Open your browser and navigate to `http://localhost:3000`.
3. Enter the name of the city for which you want to retrieve weather information.
4. Press Enter or click on the "Get Weather" button.
5. The application will display the current weather information for the specified city, including temperature, humidity, and weather conditions.
6. Additional assets related to the weather conditions may also be displayed if available.

## Database

This application uses a JSON file (`Db.json`) as the database to store additional assets related to weather conditions. The JSON file structure is as follows:

```json
{
  "weather_condition_1": "asset_link_1",
  "weather_condition_2": "asset_link_2",
  ...
}
```

## Technologies Used
- Express.js: A web application framework for Node.js used for building the backend server.
- Node.js: A JavaScript runtime environment used for executing JavaScript code outside the web browser.
- OpenWeatherMap API: A service providing weather data for any location in the world.
- JSON File: A JSON file used as a simple database to store additional assets related to weather conditions.
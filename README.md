# React Weather App

This is a simple weather app built with React and TypeScript. It uses the OpenWeatherMap API to fetch the current weather data for any city in the world. It also displays a colored circle that changes according to the weather description.

## Features

- Responsive design that adapts to different screen sizes
- Auto-complete feature that suggests city names as you type
- Error handling that shows a message if the city is not found or the API request fails
- Dynamic background color that changes according to the weather description

## Demo

You can see a live demo of the app here: https://react-weather-app-city-1.vercel.app/

## Installation

To run the app locally, you need to have Node.js and npm installed on your machine. You also need to get an API key from OpenWeatherMap (https://openweathermap.org/api).

Then, follow these steps:

1. Clone this repository: `git clone https://github.com/your-username/react-weather-app.git`
2. Go to the project directory: `cd react-weather-app`
3. Install the dependencies: `npm install`
4. Create a `.env` file in the root folder and add your API key as `REACT_APP_API_KEY`
5. Start the development server: `npm start`
6. Open http://localhost:3000 in your browser

## Technologies

This app is built with the following technologies:

- React (https://reactjs.org/)
- TypeScript (https://www.typescriptlang.org/)
- Axios (https://axios-http.com/)
- React Autosuggest (https://react-autosuggest.js.org/)
- Vercel (https://vercel.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

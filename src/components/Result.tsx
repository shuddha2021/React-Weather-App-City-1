import React from 'react';

interface ResultProps {
    weatherData: {
        temperature: number;
        feels_like: number;
        wind_speed: number;
        description: string;
        city: string;
    } | null;
    loading: boolean;
    error?: string | null;
    color: string; // Add this line
}

const Result: React.FC<ResultProps> = ({ weatherData, loading, error, color }) => {
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!weatherData) {
        return null;
    }

    const { temperature, feels_like, wind_speed, description, city } = weatherData;

    return (
        <div className="result">
            <div style={{display: "flex", alignItems: "center"}}> {/* Add this div */}
                <div className="circle" style={{ backgroundColor: color }}></div>
                <h2>{city}</h2>
            </div>
            <p>Description: {description}</p>
            <p>Current temp: {temperature.toFixed(2)}°F</p>
            <p>Feels like: {feels_like.toFixed(2)}°F</p>
            <p>Wind speed: {wind_speed.toFixed(2)}mph</p>
        </div>
    );
};

export default Result;

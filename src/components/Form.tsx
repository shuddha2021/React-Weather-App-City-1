import React from 'react';

interface FormProps {
    onSearch: (city: string) => void; // Change the type of onSearch prop
    city: string; // Add city prop
}

const Form: React.FC<FormProps> = ({ onSearch, city }) => {
    // Remove the city state

    // Remove the handleSubmit function

    return (
        <div className="form"> {/* Change this to a div */}
            <input
                type="text"
                placeholder="Enter your city"
                value={city} // Use city prop
                onChange={(e) => onSearch(e.target.value)} // Use onSearch prop
            />
        </div>
    );
};

export default Form;

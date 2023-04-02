import React from 'react';
import Button from './Button';

const ButtonList = () => {
    const buttons = ['All', 'Music', 'News', 'Travel', 'Movies', 'Fitness', 'Live', 'Tech', 'Gadgets', 'Android', 'iOS', 'Apple', 'Samsung', 'MacOS', 'Windows', 'Documentary', 'Engineering'];
    return (
        <div className="flex flex-row overflow-x-auto whitespace-nowrap">
            {
                buttons.map((button, index) => <Button name={button} key={index} />)
            }
        </div>
    )
};

export default ButtonList;
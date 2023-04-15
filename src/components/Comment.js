import React from 'react';
import user_icon from '../assets/account_icon.png';

const Comment = ({ data }) => {
    return (
        <div className="my-2 flex flex-row items-center bg-gray-100 rounded-md shadow-sm border border-gray-200">
            <img alt="account" src={user_icon} className="h-9 m-2" />
            <div className="flex flex-col m-2">
                <h2 className="text-md font-semibold">{data.name}</h2>
                <h3 className="text-sm">{data.text} ({data.id})</h3>
            </div>
        </div>
    );
};

export default Comment;
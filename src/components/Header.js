import React from 'react';
import menu_burger_icon from '../assets/menu_burger_icon.png';
import youtube_logo from '../assets/yt_logo_rgb_light.png';
import search_icon from '../assets/search_icon.png';
import account_icon from '../assets/account_icon.png';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    const toggleSidebar = () => dispatch(toggleMenu());
    return (
        <div className="grid grid-flow-col py-5 px-5 my-2 shadow-lg w-full">
            <div className="flex col-span-2">
                <button onClick={() => toggleSidebar()}><img alt="menu" src={menu_burger_icon} className="h-7 mr-4" /></button>
                <Link to="/"><img alt="youtube-logo" src={youtube_logo} className="h-7 ml-4" /></Link>
            </div>
            <div className="flex col-span-9">
                <input type="text" className="w-1/2 rounded-l-full h-8 border border-gray-400 p-3" />
                <button className="h-8 rounded-r-full bg-gray-100 hover:bg-gray-200 border border-gray-400 px-3 py-1"><img alt="search" src={search_icon} className="h-2/3" /></button>
            </div>
            <div className="col-span-1 flex justify-end pr-3">
                <img alt="account" src={account_icon} className="h-7" />
            </div>
        </div>
    )
};

export default Header;
import React, { useCallback, useEffect, useState } from 'react';
import menu_burger_icon from '../assets/menu_burger_icon.png';
import youtube_logo from '../assets/yt_logo_rgb_light.png';
import search_icon from '../assets/search_icon.png';
import account_icon from '../assets/account_icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch();
    const searchCache = useSelector(store => store.search);
    const getSearchSugestions = useCallback(async () => {
        const data = await fetch(YOUTUBE_SEARCH_API(searchQuery));
        const json = await data.json();
        setSearchSuggestions(json[1]);
        dispatch(cacheResults({
            [searchQuery]: json[1]
        }));
    }, [searchQuery, dispatch]);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSearchSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSugestions();
            }
        }, 200);
        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery, getSearchSugestions, searchCache]);
    const toggleSidebar = () => dispatch(toggleMenu());
    return (
        <div className="grid grid-flow-col py-5 px-5 my-2 shadow-lg w-full">
            <div className="flex col-span-2">
                <button onClick={() => toggleSidebar()}><img alt="menu" src={menu_burger_icon} className="h-7 mr-4" /></button>
                <Link to="/"><img alt="youtube-logo" src={youtube_logo} className="h-7 ml-4" /></Link>
            </div>
            <div className="flex col-span-9">
                <div className="flex-col w-1/2">
                    <input type="text" className="w-full rounded-l-full h-8 border border-gray-400 p-3 align-middle" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} />
                    {
                        showSuggestions && searchSuggestions.length
                            ?
                            <div className="absolute w-1/3 bg-white rounded-lg shadow-lg border border-gray-300 py-2">
                                <ul className="pt-2">
                                    {searchSuggestions.map((suggestion, index) => <li className="py-1 px-5 hover:bg-slate-100" key={index}>{suggestion}</li>)}
                                </ul>
                            </div>
                            :
                            null
                    }
                </div>
                <button className="h-8 rounded-r-full bg-gray-100 hover:bg-gray-200 border border-gray-400 px-3 py-1 align-middle"><img alt="search" src={search_icon} className="h-2/3" /></button>
            </div>
            <div className="col-span-1 flex justify-end pr-3">
                <img alt="account" src={account_icon} className="h-7" />
            </div>
        </div>
    );
};

export default Header;
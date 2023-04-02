import React from 'react';
import { useSelector } from 'react-redux';

const SidebarTile = ({ info }) => {
    const isMenuVisible = useSelector(store => store.app.isMenuOpen);
    if (isMenuVisible) {
        return (
            <div className="flex flex-row min-w-max w-full mx-2 px-2 my-1 py-1 hover:border hover:border-gray-100 hover:bg-gray-100 hover:rounded-lg" >
                <svg className="h-8 w-10 px-2" viewBox="0 0 24 24">
                    <g>
                        <path d={info.path_d_value}></path>
                    </g>
                </svg>
                <p className="pl-2 self-center">{info.name}</p>
            </div>
        )
    }
    return (
        <div className="flex flex-col m-2 p-2 hover:border hover:border-gray-100 hover:bg-gray-100 hover:rounded-lg" >
            <svg viewBox="0 0 30 30" preserveAspectRatio="xMidYMid meet" className="h-10 w-12 p-1 text-center">
                <g>
                    <path d={info.path_d_value}></path>
                </g>
            </svg>
            <p className="text-xs text-center text-ellipsis overflow-hidden whitespace-nowrap">{info.name}</p>
        </div>
    );
};

export default SidebarTile;
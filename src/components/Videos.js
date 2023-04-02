import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';

const Videos = () => {
    const [videos, setVideos] = useState([]);
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data?.json();
        setVideos(json?.items);
        console.log('API Called');
    };
    useEffect(() => {
        getVideos();
    }, []);
    let className;
    const isMenuVisible = useSelector(store => store.app.isMenuOpen);
    if (isMenuVisible) {
        className = "grid grid-cols-3 px-10";
    } else {
        className = "grid grid-cols-4";
    }
    if (!videos || !videos.length) {
        return;
    }
    return (
        <div className={className}>
            {
                videos.map(video => <Link to={`/watch?v=${video?.id}`} key={video?.id}><VideoCard video={video} /></Link>)
            }
        </div>
    )
};

export default Videos;
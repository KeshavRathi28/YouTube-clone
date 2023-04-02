import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { clearOnWatchPage, collapseMenu, setOnWatchPage } from '../utils/appSlice';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setOnWatchPage());
        dispatch(collapseMenu());
        return () => {
            dispatch(clearOnWatchPage());
        }
    }, [dispatch]);
    return (
        <div className="px-5">
            <iframe width="1008" height="567" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
};

export default WatchPage;
import React, { useCallback, useEffect, useState } from 'react';
import { getRelativeTime, getViewsString, YOUTUBE_CHANNEL_API } from '../utils/constants';

const VideoCard = ({ video }) => {
    const channelId = video?.snippet?.channelId;
    const channelTitle = video?.snippet?.channelTitle;
    const time = getRelativeTime(video?.snippet?.publishedAt);
    const thumbnail = video?.snippet?.thumbnails?.maxres?.url || video?.snippet?.thumbnails?.medium?.url;
    const title = video?.snippet?.title;
    const views = getViewsString(video?.statistics?.viewCount);
    const [channel, setChannel] = useState(null);
    const getChannelInfo = useCallback(async () => {
        const data = await fetch(YOUTUBE_CHANNEL_API(channelId));
        const json = await data?.json();
        setChannel(json?.items[0]);
    }, [channelId]);
    useEffect(() => {
        getChannelInfo();
    }, [getChannelInfo]);
    return (
        <div className="p-1 m-2">
            <img alt="video-thumbnail" src={thumbnail} className="rounded-lg w-full" />
            <div className="flex space-x-3 my-3">
                <img alt="channel-thumbnail" src={channel?.snippet?.thumbnails?.high?.url || channel?.snippet?.thumbnails?.medium?.url} className="w-auto h-auto max-h-9 rounded-full" />
                <div className="text-gray-700">
                    <h2 className="text-sm font-semibold">{title}</h2>
                    <h3 className="text-xs">{channelTitle}</h3>
                    <ul className="text-xs flex list-none space-x-1">
                        <li>{views}</li>
                        <li>•</li>
                        <li>{time}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_CHANNEL_API = channelId =>`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${YOUTUBE_API_KEY}`;

export const getRelativeTime = timestamp => {
    const published = Date.parse(timestamp);
    const now = Date.now();
    const diff = now - published;
    if (diff < 1000) {
        return 'Just now';
    } else if (diff === 1000) {
        return '1 second ago';
    } else if (diff < 60000) {
        const temp = Math.floor(diff / 1000);
        if (temp === 1) {
            return '1 second ago';
        } else {
            return `${temp} seconds ago`;
        }
    } else if (diff === 60000) {
        return '1 minute ago';
    } else if (diff < 3600000) {
        const temp = Math.floor((diff / 1000) / 60);
        if (temp === 1) {
            return '1 minute ago';
        } else {
            return `${temp} minutes ago`;
        }
    } else if (diff === 3600000) {
        return `1 hour ago`;
    } else if (diff < 86400000) {
        const temp = Math.floor(((diff / 1000) / 60) / 60);
        if (temp === 1) {
            return '1 hour ago';
        } else {
            return `${temp} hours ago`;
        }
    } else if (diff === 86400000) {
        return '1 day ago';
    } else if (diff < 604800000) {
        const temp = Math.round((((diff / 1000) / 60) / 60) / 24);
        if (temp === 1) {
            return '1 day ago';
        } else {
            return `${temp} days ago`;
        }
    } else if (diff === 604800000) {
        return '1 week ago';
    } else if (diff <= 2419200000) {
        const temp = Math.round(((((diff / 1000) / 60) / 60) / 24) / 7);
        if (temp === 1) {
            return '1 week ago';
        } else {
            return `${temp} weeks ago`;
        }
    } else if (diff <= 2592000000) {
        return '1 month ago';
    } else if (diff < 31536000000) {
        const temp = Math.round(((((diff / 1000) / 60) / 60) / 24) / 30);
        if (temp === 1) {
            return '1 month ago';
        } else {
            return `${temp} months ago`;
        }
    } else if (diff === 31536000000) {
        return '1 year ago';
    } else {
        const temp = Math.round(((((diff / 1000) / 60) / 60) / 24) / 365);
        if (temp === 1) {
            return '1 year ago';
        } else {
            return `${temp} years ago`;
        }
    }
};

export const getViewsString = count => {
    if (count === 1) {
        return '1 view';
    } else if (count < 1000) {
        return `${count} views`;
    } else if (count < 10000) {
        return `${(count / 1000).toFixed(1)}K views`;
    } else if (count < 100000) {
        return `${(count / 1000).toFixed(0)}K views`;
    } else if (count < 1000000) {
        return `${(count / 100000).toFixed(1)} lakh views`;
    } else if (count < 10000000) {
        return `${(count / 100000).toFixed(0)} lakh views`;
    } else if (count < 100000000) {
        return `${(count / 10000000).toFixed(1)} crore views`;
    } else if (count < 1000000000) {
        return `${(count / 10000000).toFixed(0)} crore views`;
    }
};

export const YOUTUBE_SEARCH_API = searchQuery => `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`;
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showMenu } from '../utils/appSlice';
import ButtonList from './ButtonList';
import Videos from './Videos';

const MainContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showMenu());
    }, [dispatch]);
    return (
        <div className="overflow-hidden px-5 mx-5">
            <ButtonList />
            <Videos />
        </div>
    );
};

export default MainContainer;
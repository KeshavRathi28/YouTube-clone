import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
        onWatchPage: false
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        showMenu: (state) => {
            state.isMenuOpen = true;
        },
        collapseMenu: (state) => {
            state.isMenuOpen = false;
        },
        setOnWatchPage: (state) => {
            state.onWatchPage = true;
        },
        clearOnWatchPage: (state) => {
            state.onWatchPage = false;
        }
    }
});

export const { toggleMenu, showMenu, collapseMenu, setOnWatchPage, clearOnWatchPage } = appSlice.actions;

export default appSlice.reducer;
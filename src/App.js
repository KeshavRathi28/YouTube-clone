import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import Header from './components/Header';

function App() {
    return (
        <Provider store={store}>
            <Header />
            <Body />
        </Provider>
    );
}

export default App;
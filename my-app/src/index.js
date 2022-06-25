import ReactDOM from 'react-dom';
import App from './app'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducers } from './reducers/reducer';

const myStore = createStore(reducers);


ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.getElementById("root"))
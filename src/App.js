import './Style.css'
import Header from './Components/Header';
import Modal from './Components/Modal'
import { createStore, combineReducers } from 'redux'
import { modalReducer } from './reducers/reducers'
import { Provider } from 'react-redux'

function App() {

    const store = createStore(combineReducers({
        modal: modalReducer
    }))

    return (
        <Provider store={store}>
            <Header></Header>
            <Modal></Modal>
        </Provider>
    )
}

export default App;
import './Style.css'
import Header from './Components/Header';
import Modal from './Components/Modal'
import Main from './Components/Main'
import { createStore, combineReducers } from 'redux'
import { modalReducer } from './reducers/reducers'
import { listReducer } from './reducers/reducers'
import { Provider } from 'react-redux'

function App() {

    const store = createStore(combineReducers({
        modal: modalReducer,
        list: listReducer
    }))

    return (
        <Provider store={store}>
            <Header></Header>
            <Main></Main>
            <Modal></Modal>
        </Provider>
    )
}

export default App;
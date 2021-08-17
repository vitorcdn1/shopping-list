import { useSelector } from 'react-redux';
import Form from './Form'

function Modal() {

    const modal = useSelector(state => { return state.modal })

    return (
        <div className={modal ? "modal" : "hide-modal"}>
            <Form></Form>
        </div>
    )
}

export default Modal;
import { useDispatch, useSelector } from 'react-redux'
import { showOrHideModalAction } from '../actions/actions'

function Form() {

    const modal = useSelector(state => { return state })
    const dispatch = useDispatch()

    function closeModal(event) {
        event.preventDefault()
        dispatch(showOrHideModalAction)
        console.log(modal)
    }

    return (
        <div className="form-container">
            <button onClick={closeModal} className="close-button restore">X</button>


            <div className="form-main">
                <h1 className="title-form">Add Item to list</h1>

                <form className="form">

                    <div className="input-container restore">
                        <p>Name</p>
                        <input type="text" placeholder="Name"></input>
                    </div>

                    <div className="input-container restore">
                        <p>Amount</p>
                        <input type="number" placeholder="Amount"></input>
                    </div>

                    <div className="input-container restore">
                        <p>Price</p>
                        <input type="Number" placeholder="Price"></input>
                    </div>

                    <div className="input-container restore">
                        <button className="button-add">Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;
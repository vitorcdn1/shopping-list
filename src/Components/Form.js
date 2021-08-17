import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { showOrHideModalAction } from '../actions/actions'
import { addItem } from '../actions/actions'

function Form() {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState(1)
    const [price, setPrice] = useState(1.00)

    const dispatch = useDispatch()

    function onHandleChange(event) {
        if (event.target.id === 'name') {
            setName(event.target.value)
        }
        if (event.target.id === 'amount') {
            setAmount(event.target.value)
        }
        if (event.target.id === 'price') {
            setPrice(event.target.value)
        }
    }

    function AddItem(event) {
        event.preventDefault()
        if (name === '') {
            alert('Please type the name of the item')
        } else {
            dispatch(addItem({name, amount, price}))
        }
    }

    return (
        <div className="form-container">
            <button onClick={() => { dispatch(showOrHideModalAction)} } className="close-button restore">X</button>


            <div className="form-main">
                <h1 className="title-form">Add Item to list</h1>

                <form className="form">

                    <div className="input-container restore">
                        <p>Name</p>
                        <input id="name" type="text" placeholder="Name" onChange={onHandleChange}></input>
                    </div>

                    <div className="input-container restore">
                        <p>Amount</p>
                        <input id="amount" type="number" placeholder="Amount" onChange={onHandleChange}></input>
                    </div>

                    <div className="input-container restore">
                        <p>Price</p>
                        <input id="price" type="Number" placeholder="Price" onChange={onHandleChange}></input>
                    </div>

                    <div className="input-container restore">
                        <button className="button-add" onClick={AddItem}>Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;
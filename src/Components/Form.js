import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { showOrHideModalAction } from '../actions/actions'
import { addItem } from '../actions/actions'
import { priceTotal } from '../actions/actions'

function Form() {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState(1)
    const [price, setPrice] = useState(1.00)

    const dispatch = useDispatch()

    function onHandleChange(event) {
        const reducers = {
            name : () => { setName(event.target.value)},
            amount : () => { setAmount(event.target.value) },
            price : () => { setPrice(event.target.value) }
        }
        
        reducers[event.target.id]()
    }

    function AddItem(event) {
        event.preventDefault()
        if (name === '') {
            alert('Please type the name of the item')
        } else {
            dispatch(addItem({name, amount, price }))
            dispatch(priceTotal(true, Number(price) * Number(amount)))
            dispatch(showOrHideModalAction)
            setName('')
            setAmount(1)
            setPrice(1.00)
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
                        <input id="name" type="text" placeholder="Name" onChange={onHandleChange} value={name}></input>
                    </div>

                    <div className="input-container restore">
                        <p>Amount</p>
                        <input id="amount" type="number" placeholder="Amount" onChange={onHandleChange} value={amount}></input>
                    </div>

                    <div className="input-container restore">
                        <p>Price</p>
                        <input id="price" type="Number" placeholder="Price" onChange={onHandleChange} value={price}></input>
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
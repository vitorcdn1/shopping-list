import { useDispatch } from "react-redux";
import { showOrHideModalAction } from '../actions/actions'

function Header() {

    const dispatch = useDispatch()

    return (
        <header className="header-container">
            <div className="header">
                <h1 className="header-title">Shopping List</h1>
                <button onClick={() => {
                    dispatch(showOrHideModalAction)
                }} className="button-show-modal restore">+</button>
            </div>
        </header>
    )
}

export default Header;
import Table from './Table'
import { useSelector } from 'react-redux'

function Main() {

    const price = useSelector(state => { return state.price })

    return (
        <div className="Main">
            <h1>Products</h1>

            <Table></Table>

            <div className="result">
                <h1>Total: {price}</h1>
            </div>
        </div>
    );
}

export default Main;
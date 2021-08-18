import { useSelector } from "react-redux";


function Table() {

    const list = useSelector(state => { return state.list })

    return(
        <table className="table-container">
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Price</th>
            </tr>

            {list.map(item => {
                return (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.amount}</td>
                        <td>{item.price}</td>
                    </tr>
                )
            })}
        </table>
    )
}

export default Table;
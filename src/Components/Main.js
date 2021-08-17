import { useSelector } from "react-redux";


function Main() {

    const items = useSelector(state => { return state.list })

    return (
        <div className="Main">
            <h1>Test</h1>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Price</th>
                </tr>

                {items.map(item => {
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.amount}</td>
                            <td>R$ {item.price}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default Main;
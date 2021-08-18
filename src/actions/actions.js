const showOrHideModalAction = { type: "MODAL" }
const addItem = item => { return {type: "ADD_ITEM", payload: item}}
const priceTotal = (add=true, value) => { return { type: add ? "INCREASE_PRICE" : "DECREASE_PRICE", payload: value} }

export {
    showOrHideModalAction,
    addItem,
    priceTotal
}
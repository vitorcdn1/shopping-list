const showOrHideModalAction = { type: "MODAL" }
const addItem = item => { return {type: "ADD_ITEM", payload: item}}

export {
    showOrHideModalAction,
    addItem
}
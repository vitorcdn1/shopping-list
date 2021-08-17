function modalReducer(state=false, action) {
    switch (action.type) {
        case "MODAL":
            return !state
        default:
            return state;
    }
}

function listReducer(state = [], action) {
    switch (action.type) {

        case "ADD_ITEM":
            return [...state, action.payload]

        default:
            return state;
    }
}

export {
    modalReducer,
    listReducer
}
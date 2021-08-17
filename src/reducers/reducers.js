function modalReducer(state=true, action) {
    switch (action.type) {
        case "MODAL":
            return !state
        default:
            return state;
    }
}

export {
    modalReducer
}
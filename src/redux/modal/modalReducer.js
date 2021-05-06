import { SHOW_MODAL, HIDE_MODAL } from './modalTypes'

const initialState = {
    loading: false,
    modalData: false,
    error: ''
}
const modalReducer = (state=initialState, action) => {
    switch(action.type){
        case SHOW_MODAL:
            return {
                ...state,
                modalData: true
            }
        case HIDE_MODAL:
            return {
                ...state,
                modalData: false
            }
        default: 
            return state
    }
}

export default modalReducer
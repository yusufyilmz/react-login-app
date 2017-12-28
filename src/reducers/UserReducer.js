import { FIRST_FORM_COMPLETE, SECOND_FORM_COMPLETE, SUBMITTING_FORM } from '../actions/types'

const INITIAL_STATE = {
    name: null,
    age: null,
    birthdate: null,
    gender: null,
    submitting: false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FIRST_FORM_COMPLETE:
            return { ...state, name: action.payload.username, age: action.payload.age }
        case SECOND_FORM_COMPLETE:
            return { ...state, gender: action.payload.gender, birthdate: action.payload.birthdate }
        case SUBMITTING_FORM:
            return { ...state, submitting: action.payload }
        default:
            return state
    }
}

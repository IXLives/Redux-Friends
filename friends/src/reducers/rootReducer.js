// Import Actions
import {
    GET_FRIENDS,
    GET_SUCCESS,
    GET_FAILED,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../actions/actions'

// State Tree
const initialState = {
    friends: [],
    isLoading: false,
    errorMessage: '',
    loggedIn: false,
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case LOGIN_FAILED: {
            return {
                ...state,
                errorMessage: action.payload,
                isLoading: false,
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                loggedIn: true,
                isLoading: false,
                errorMessage: null,
            }
        }
        case GET_FRIENDS: {
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
            }
        }
        case GET_FAILED: {
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.message
            }
        }
        case GET_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                friends: action.payload
            }
        }
        default:
            return state;
    }
}


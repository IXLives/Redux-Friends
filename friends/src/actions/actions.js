import axios from "axios";
import {axiosWithAuth} from '../axiosWithAuth';

export const GET_FRIENDS = "GET_FRIENDS";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILED = "GET_FAILED";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export default function getFriends() {
  return dispatch => {
    dispatch({ type: GET_FRIENDS });

    const token = localStorage.token
    const headers = {
      Authorization: token
    }
    axios
      .get("http://localhost:5000/api/friends/", {headers})
      .then(res => {
        console.log(res);
        dispatch({ type: GET_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: GET_FAILED, payload: err.response.data });
      });
  };
}

export function login(username, password) {
  return dispatch => {
    dispatch({ type: LOGIN_START });

    return axios
      .post("http://localhost:5000/api/login", { username, password })
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        const payload = err.response ? err.response.data : err;
        dispatch({ type: LOGIN_FAILED, payload });
      });
  };
}

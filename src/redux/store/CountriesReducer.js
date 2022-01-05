import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    countries: [],
}

export const setCountries = createAction('SET_COUNTRIES');
export const fetchCountries = createAction('FETCH_COUNTRIES');

export default createReducer(initialState, {
    [setCountries]: function (state, action) {
        state.countries = action.payload
    }
})
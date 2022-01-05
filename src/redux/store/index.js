import {applyMiddleware, combineReducers, createStore} from "redux";
import countriesReducer from "./CountriesReducer";
import createSagaMiddleware from 'redux-saga';
import {countriesWatcher} from "../saga/CountriesSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers( {countriesReducer});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(countriesWatcher);
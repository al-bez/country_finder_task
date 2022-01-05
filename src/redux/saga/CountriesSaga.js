import {takeEvery, put, call} from 'redux-saga/effects';
import {fetchCountries, setCountries, setCountriesLoading} from "../store/CountriesReducer";

const fetchCountriesFromApi = () => fetch('https://restcountries.com/v3.1/region/Europe')

function* fetchCountriesWorker() {
    const response = yield call(fetchCountriesFromApi);
    const data = yield call(() => new Promise(resolve => resolve(response.json())))
    const dataCopy = [...data];
    dataCopy.sort((a, b) => a.name.common.localeCompare(b.name.common));
    yield put(setCountries(dataCopy));
}

export function* countriesWatcher() {
    yield takeEvery(fetchCountries, fetchCountriesWorker);
}

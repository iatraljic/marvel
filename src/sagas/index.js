import {
  call,
  put,
  fork,
  take
} from 'redux-saga/effects';
import getCharacters from '../api';
import {
  INPUT_VALUE_ASYNC,
  inputValueSuccess,
  inputValueFailure,
} from '../actions';

function* inputReducerTrigger(payload) {

  try {
    const characters =
      yield call(getCharacters, payload);
    yield put(inputValueSuccess(characters));

  } catch (error) {
    yield put(
      inputValueFailure({
        error
      })
    );
  }

};

function* inputWatcher() {

  while (true) {
    const {
      payload
    } = yield take(INPUT_VALUE_ASYNC);
    yield fork(inputReducerTrigger, payload);
  }

};

export default function* rootSaga() {
  yield fork(inputWatcher);
};
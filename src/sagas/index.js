import { call, put, fork, take, cancel } from 'redux-saga/effects';
import getCharacters from '../api';
import {
  INPUT_VALUE_ASYNC,
  inputValueSuccess,
  inputValueFailure,
  loadingTrue,
  loadingFalse,
} from '../actions';

function* inputReducerTrigger(payload) {

  try {
    const characters =
      yield call(getCharacters, payload);
    yield put(loadingFalse());
    yield put(inputValueSuccess(characters));

  } catch (error) {
    yield put(inputValueFailure({ error }));
  }

};

function* inputWatcher() {
    let task = null;
    let oldPayload = {
      value: null,
      offset: -1,
    };


  while (true) {
    const {
      payload
    } = yield take(INPUT_VALUE_ASYNC); 

    if( task !== null && (oldPayload.value !== payload.value || oldPayload.offset !== payload.offset)) {
      oldPayload = {
        ...payload
      };
      yield cancel(task);
    }

    
    yield put(loadingTrue());
    task = yield fork(inputReducerTrigger, payload);
  }

};

export default function* rootSaga() {
  yield fork(inputWatcher);
};
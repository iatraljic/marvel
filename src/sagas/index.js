import {
  put, fork, take
} from 'redux-saga/effects';
import {
  INPUT_VALUE_ASYNC
} from '../actions';

function* inputReducerTrigger(keyword) {
  yield put({type: 'INPUT_VALUE', payload: keyword});
}

function* inputWatcher() {
  while (true) {
    const {
      payload
    } = yield take(INPUT_VALUE_ASYNC);

    yield fork(inputReducerTrigger, payload);
  }
}

export default function* rootSaga() {
  
  yield fork(inputWatcher);
}

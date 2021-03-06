import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

export function* incrementAsync() {
  yield delay(1000);
  yield put ({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync(),
  ]
}

export function* helloSaga() {
  console.log("Hello sagas!");
}

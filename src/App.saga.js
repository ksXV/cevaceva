import { takeEvery } from "redux-saga/effects";

export function* incrementSaga() {
  yield takeEvery("INCREMENT", function* () {
    yield console.log("I AM INCREMENTED");
  });
}

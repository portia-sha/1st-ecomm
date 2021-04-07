// effects from saga enables to create action ot listen actions
import { takeLatest, call, put, all } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.action';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();

    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}

// Saga is aimed to run multiples sagas concurrently w/o blocking code, no matter asynchronous action or others, also we are able to cancel last task in the sagamiddleware when next task is fired on
// yield is going to pause the function when specific action we want comes in
// first make sure yield function
// takeEvery(): 监听作用，listens every action that pass into it. 1st arg: action type, 2nd: a generator function will run when action trigger. 每个action都会触发一次，each asynchronous action → each asynchronous request, 并且不会在乎上次的请求是否返回

// call(): a generator function that invoke the function

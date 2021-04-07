import { all, call } from 'redux-saga/effects';
import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}

// all(): in order to invoke all yield functions side by side in seperate tasks streams at the same time, dont have to wait last saga finish and back

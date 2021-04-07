import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    // the Object.keys return the all the keys(not value)in an object as an array
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
// !! false value = false; !! true value = true
// to understand this, if there is the collections in the shop, !! will return true, when pass this prop to shoppage, as long as it return true, the page will keep spinner without show our page; but when there is no collections, which we know isLoading will not spinner and error will show since collection is null, therefore we use !isCollectionLoaded in ShopPage

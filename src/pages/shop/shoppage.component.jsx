// since we need to store the actual data related to our collection, class conponenet is needed

import React from 'react';
import { Route } from 'react-router-dom';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { updateCollections } from '../../redux/shop/shop.action';

import withSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverViewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }
  // state ={
  //   loading:true
  // }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    // fetch(
    //   'https://firestore.googleapis.com/v1/projects/my-crown-db-ac0d9/databases/(default)/documents/collections'
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections));

    // onSnnapshot: when collectionRef get update or run 1st time, this collectionRef will send the snapshot that reperesent the code of collection object array when render
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
      // console.log(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverViewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

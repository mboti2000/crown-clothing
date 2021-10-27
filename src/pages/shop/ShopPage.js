import React from 'react';
import './ShopPage.scss';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import { Route } from 'react-router';
import CollectionPage from '../collection/CollectionPage';
const ShopPage = () => {
    console.log(window.location.href)

    return (
        <div className="shop-page">
           <Route exact path={`/shop`} component={CollectionsOverview} />
           <Route path={`/shop/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default ShopPage;

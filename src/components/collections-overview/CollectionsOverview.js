import React from 'react';
import './CollectionsOverview.scss';
import CollectionPreview from '../collection-preview/CollectionPreview';
import { useSelector } from 'react-redux';

const CollectionsOverview = () => {
    const collections = useSelector(state => state.collections.collections);
    const overviewsToRender = Object.keys(collections).map(key => collections[key]);
    return (
        <div className="collections-overview">
             {
              overviewsToRender.map(({id, ...otherCollectionProps}) => {
                   return <CollectionPreview key={id} {...otherCollectionProps}/>;
                })
            }
        </div>
    )
}

export default CollectionsOverview;

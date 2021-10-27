import React from 'react';
import './CollectionPage.scss';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';


const CollectionPage = () => {
    const collections = useSelector(state=> state.collections.collections);
    const { collectionId } = useParams();
    const collection =  collections[collectionId];
    
    return (
        <div className="collection-page">
            <h2 className="title">{collection.title}</h2>
            <div className="items">
                {
                collection.items.map(item =>{
                        return <CollectionItem item={item}/>;
                    })

                }
            </div>
        </div>
    )
}

export default CollectionPage;

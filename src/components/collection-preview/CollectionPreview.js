import React, {useMemo} from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({title, items}) => {
    const renderedItems = useMemo(() => items.filter((item,idx) => idx < 4).map((item) =>{
        return <CollectionItem key={item.id} item={item}/>;
    }), [items]);

    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    renderedItems
                }
            </div>
        </div>
    )
};

export default CollectionPreview;

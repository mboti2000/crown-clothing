import React from 'react';
import './MenuItem.scss';
import { useHistory } from 'react-router';

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    const history = useHistory();

    return (
        <div className={`${size} menu-item`} onClick={() => history.push(linkUrl)}>
            <div className="background-image"  style={{ backgroundImage: `url(${imageUrl})` }}/>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;

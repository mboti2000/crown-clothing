import './CollectionItem.scss';
import CustomButton from '../custom-button/CustomButton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const CollectionItem = ({item}) => {
    const dispatch = useDispatch();

    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${item.imageUrl})` }} />
            <div className="collection-footer">
                <div className="name">{item.name}</div>
                <div className="price">${item.price}</div>
            </div>
            <CustomButton inverted onClick={() => dispatch(addToCart(item))}>Add to cart</CustomButton>
        </div>
    )
};

export default CollectionItem;

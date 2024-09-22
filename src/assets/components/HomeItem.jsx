import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store redux/bagSlice";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();

  const bagItems = useSelector((store) => store.bag);

  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item_container">
      <img className="item_image" src={item.image} alt="item_image"></img>
      <div className="item_detail">
        <div className="rating">
          {item.rating.stars}⭐ | {item.rating.count}
        </div>
        <div className="company">{item.company}</div>
        <div className="item_name">{item.item_name}</div>
        <div className="price_container">
          <span className="current_price">Rs{item.current_price}</span>
          <span className="original_price">Rs{item.original_price}</span>
        </div>
        <span className="discount_percentage">
          {item.discount_percentage}% OFF
        </span>
        {elementFound ? (
          <button className="btn_remove_bag" onClick={handleRemove}>
            Remove
          </button>
        ) : (
          <button className="btn_add_bag" onClick={handleAddToBag}>
            Add to Bag
          </button>
        )}
      </div>
    </div>
  );
};
export default HomeItem;

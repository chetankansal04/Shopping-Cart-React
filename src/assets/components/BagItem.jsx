import { useDispatch } from "react-redux";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { bagActions } from "../store redux/bagslice";

const BagItems = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="bag_item_container">
      <div className="item_left_part">
        <img className="bag_item_img" src={item.image} />
      </div>
      <div className="item_right_part">
        <div className="company">{item.company}</div>
        <div className="item_name">{item.item_name}</div>
        <div className="price_container">
          <span className="current_price">Rs {item.current_price}</span>
          <span className="original_price">Rs {item.original_price}</span>
          <span className="discount_percentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return_period">
          <span className="return_period_days">{item.return_period} days</span>{" "}
          return available
        </div>
        <div className="delivery_details">
          Delivery by
          <span className="delivery_details_days">{item.delivery_date}</span>
        </div>
      </div>
      <div className="remove_from_cart" onClick={handleRemoveItem}>
        <IoIosCloseCircleOutline />
      </div>
    </div>
  );
};
export default BagItems;

import { useSelector } from "react-redux";
import BagItems from "./BagItem";

const BagSummary = ({}) => {
  const bagItemIds = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });
  let CONVENIENCE_FEE = 99;
  let totalItem = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEE;

  return (
    <div className="bag_details_container">
      <div className="price_header">PRICE DETAILS ({totalItem} Items) </div>
      <div className="price_item">
        <span className="price_item_tag">Total MRP : </span>
        <span className="price_item_value">₹{totalMRP}</span>
      </div>
      <div className="price_item">
        <span className="price_item_tag">Discount on MRP </span>
        <span className="price_item_value priceDetail_base_discount">
          - ₹{totalDiscount}
        </span>
      </div>
      <div className="price_item">
        <span className="price_item_tag">Convenience Fee</span>
        <span className="price_item_value">₹99</span>
      </div>
      <hr />
      <div className="price_footer">
        <span className="price_item_tag">Total Amount</span>
        <span className="price_item_value">₹{finalPayment}</span>
      </div>
      <button className="btn_place_order">
        <div className="css_xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};
export default BagSummary;

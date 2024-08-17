import { useSelector } from "react-redux";
import BagItems from "../assets/components/BagItem";
import BagSummary from "../assets/components/BagSummary";
const Bag = () => {
  const bagItems = useSelector((state) => state.bag);

  const items = useSelector((state) => state.items);

  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag_page">
        {finalItems.map((item) => (
          <BagItems item={item}></BagItems>
        ))}

        <BagSummary></BagSummary>
      </div>
    </main>
  );
};
export default Bag;

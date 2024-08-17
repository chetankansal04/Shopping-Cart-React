import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsActions } from "../store redux/itemsSlice";
import { fetchStatusActions } from "../store redux/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatchStatus = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatchStatus(fetchStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((response) => response.json())
      .then(({ items }) => {
        dispatchStatus(fetchStatusActions.markFetchDone());
        dispatchStatus(fetchStatusActions.markFetchingFinished());
        dispatchStatus(itemsActions.addInititalItem(items[0]));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;

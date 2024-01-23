import { useState, createContext, useContext, useEffect } from "react";

const WatchListContext = createContext();

const defaultWatchList = JSON.parse(localStorage.getItem("watchList")) || [];

const WatchListProvider = ({ children }) => {
    const [items, setItems] = useState(defaultWatchList);

    useEffect(() => {
        localStorage.setItem("watchList", JSON.stringify(items))
    }, [items])

    const addToWatchList = (data, findWatchListItem) => {

        if (!findWatchListItem) {
            return setItems((items) => [data, ...items]);
        }

        const filtered = items.filter((item) => item.id !== findWatchListItem.id)

        setItems(filtered);

    }

    const removeFromWatchList = (item_id) => {
        const filtered = items.filter((item) => item.id !== item_id)
        setItems(filtered);
    }

    const values = {
        items,
        setItems,
        addToWatchList,
        removeFromWatchList,
    };

    return (
        <WatchListContext.Provider value={values}>{children}</WatchListContext.Provider>
    );
};

const useWatchList = () => useContext(WatchListContext);

export { WatchListProvider, useWatchList };



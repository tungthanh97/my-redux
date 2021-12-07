import { useContext } from "react";
import ReduxContext from "../ReduxContext";

function createStoreHook(context = ReduxContext) {
  const useReduxContext = () => useContext(context);

  return function useStore() {
    const store = useReduxContext();
    return store;
  };
}

export const useStore = createStoreHook();

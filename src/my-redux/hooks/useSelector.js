import { useEffect, useReducer, useRef } from 'react';
import { useStore } from './useStore';

function useSelectorWithStore(selector, store) {
  const [, forceRender] = useReducer((s) => s + 1, 0);
  //subcribe component render function
  useEffect(() => {
    function checkUpdate() {
      // console.log("update");
      forceRender();
    }
    store.subscribe(checkUpdate);
    return () => store.unsubscribe(checkUpdate);
  }, [store]);
  //save previous State
  const latestSelectedState = useRef();
  const storeState = store.getState();
  let selectedState;
  const newSelectedState = selector(storeState);
  //Check if state changed
  if (
    latestSelectedState.current === undefined ||
    latestSelectedState.current !== newSelectedState
  ) {
    selectedState = newSelectedState;
  } else {
    selectedState = latestSelectedState.current;
  }
  //update new state
  latestSelectedState.current = selectedState;
  return selectedState;
}

function createSelectorHook() {
  return function useSelector(selector) {
    const store = useStore();
    const finalSelector =
      typeof selector === 'function' ? selector : (store) => store[selector];
    const selectedState = useSelectorWithStore(finalSelector, store);
    return selectedState;
  };
}
export const useSelector = createSelectorHook();

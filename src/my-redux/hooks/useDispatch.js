import { useStore } from "./useStore";

function createDispatchHook() {
  return function useDispatch() {
    const store = useStore();
    return store.dispatch;
  };
}

export const useDispatch = createDispatchHook();

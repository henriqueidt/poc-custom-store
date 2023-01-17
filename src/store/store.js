import { useEffect, useState } from "react";

const createEmitter = () => {
  const subscriptions = new Map();
  return {
    emit: (v) => subscriptions.forEach((fn) => fn(v)),
    subscribe: (fn) => {
      const key = Symbol();
      subscriptions.set(key, fn);
      return () => subscriptions.delete(key);
    },
  };
};

export const createStore = (init) => {
  const emitter = createEmitter();

  let store = null;

  const get = () => store;
  const set = (operation) => {
    store = operation(store);
    // notify all subscriptions when the store is updated
    emitter.emit(store);
  };

  store = init(get, set);

  const useStore = () => {
    // initialize component with latest store using `get()`
    const [localStore, setLocalStore] = useState(get());

    // update local store when global store updates
    // emitter.subscribe returns a cleanup function that will clean this on unmount
    useEffect(() => emitter.subscribe(setLocalStore), []);
    return localStore;
  };

  return useStore;
};

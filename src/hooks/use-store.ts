import { useContext, createContext } from 'react';
import stores from '../stores';

export const StoreContext = createContext(stores);
export const Provider = StoreContext.Provider;
export const useStore = (mapStateToProps?: any) => {
  const store = useContext(StoreContext);
  if(mapStateToProps){
    return mapStateToProps(store);
  }
  return store;
};

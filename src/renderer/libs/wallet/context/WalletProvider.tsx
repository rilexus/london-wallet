import { FC, useCallback, useEffect, useState } from 'react';
import { DispatchContext, StateContext } from './Wallet.context';
import { WalletActionTypes } from './WalletActionTypes.enum';
import { WalletController, StateActionTypesEnum } from '../controllers';

const walletController = new WalletController();

const WalletProvider: FC = ({ children }) => {
  // const [state] = useReducer<WalletReducer>(walletReducer, {});
  const [, setToggle] = useState(true);

  useEffect(() => {
    const handleStateChange = () => {
      setToggle((t) => !t);
    };
    walletController.addListener(
      StateActionTypesEnum.stateChange,
      handleStateChange
    );
    return () => {
      walletController.removeListener(
        StateActionTypesEnum.stateChange,
        handleStateChange
      );
    };
  }, []);

  const dispatch = useCallback((action: any) => {
    if (action.type === WalletActionTypes.fromMnemonic) {
      walletController.fromMnemonic(action.payload.mnemonic);
    }
  }, []);

  const contextValue = walletController.getState();

  return (
    <StateContext.Provider value={contextValue}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export { WalletProvider };

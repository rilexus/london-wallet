import { createContext, Dispatch } from 'react';
import { WalletActions, WalletState } from './Wallet.type';

const StateContext = createContext<WalletState>({});
const DispatchContext = createContext<Dispatch<WalletActions>>(() => {});

export { StateContext, DispatchContext };

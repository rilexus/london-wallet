import { useContext } from 'react';
import { StateContext } from '../../context/Wallet.context';

const useWalletState = () => useContext(StateContext);
export { useWalletState };

import { useContext } from 'react';
import { DispatchContext } from '../../context/Wallet.context';

const useWalletDispatch = () => useContext(DispatchContext);
export { useWalletDispatch };

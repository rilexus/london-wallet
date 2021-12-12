import { useWalletDispatch } from '../use-wallet-dispatch';
import { createFromMnemonicAction } from '../../context';

const useWallet = () => {
  const walletDispatch = useWalletDispatch();
  const fromMnemonic = (mnemonic: string) => {
    walletDispatch(createFromMnemonicAction(mnemonic));
  };

  return {
    fromMnemonic,
  };
};

export { useWallet };

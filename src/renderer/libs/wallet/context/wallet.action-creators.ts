import { WalletActionTypes } from './WalletActionTypes.enum';

const createFromMnemonicAction = (mnemonic: string) => ({
  type: WalletActionTypes.fromMnemonic,
  payload: { mnemonic },
});

export { createFromMnemonicAction };

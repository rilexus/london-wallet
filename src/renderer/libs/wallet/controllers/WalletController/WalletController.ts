import { ethers } from 'ethers';
import { State } from '../State';

class WalletController extends State {
  constructor() {
    super({
      /* initialState: will be provided in the react world through the context */
      wallet: null,
    });
  }

  async fromMnemonic(mnemonic: string): Promise<void> {
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    this.setState((prevState: any) => {
      return {
        ...prevState,
        wallet,
      };
    });
  }
}
export { WalletController };

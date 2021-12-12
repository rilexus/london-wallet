import { useEffect } from 'react';
import { Input } from '../../ui-kit';
import { useInput } from '../../hooks';
import { useWallet } from '../../libs/wallet';

const isEnterKey = (key: string) => key === 'Enter';

const ImportWallet = () => {
  const wallet = useWallet();
  const mnemonicInput = useInput({ name: 'mnemonic', initState: '' });

  useEffect(() => {
    if (isEnterKey(mnemonicInput.key)) {
      wallet.fromMnemonic(mnemonicInput.value);
    }
    // eslint-disable-next-line
  }, [mnemonicInput.key]);

  return (
    <div>
      <Input type="text" {...mnemonicInput.register()} placeholder="Mnemonic" />
    </div>
  );
};

export { ImportWallet };

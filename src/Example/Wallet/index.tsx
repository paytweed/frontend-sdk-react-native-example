import {Text} from 'react-native';
import S from './style';
import {hooks} from '@paytweed/frontend-sdk-react-native';
import LoggedIn from './LoggedIn';
import {useCallback} from 'react';

const Wallet = () => {
  const {data: walletExists, loading: walletExistsLoading} =
    hooks.useWalletExists();
  const [createWallet] = hooks.useCreateWallet();

  const onCreateWallet = useCallback(() => {
    createWallet({});
  }, [createWallet]);

  const renderContent = () => {
    if (walletExistsLoading) {
      return <Text>Loading...</Text>;
    }

    if (!walletExists) {
      return <Text onPress={onCreateWallet}>Create wallet</Text>;
    }

    return <LoggedIn />;
  };

  return (
    <S.Container>
      <Text data-testid="title">Example</Text>
      {renderContent()}
    </S.Container>
  );
};

export default Wallet;

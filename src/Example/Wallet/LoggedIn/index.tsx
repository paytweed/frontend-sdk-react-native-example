import {Text} from 'react-native';
import {useCallback} from 'react';
import S from './style';
import {hooks} from '@paytweed/frontend-sdk-react-native';

const LoggedIn = () => {
  const frontendSDK = hooks.useTweedFrontendSDK();
  const {data: address, loading: addressLoading} = hooks.useWalletAddress({
    blockchainId: 'ethereumSepolia',
  });

  const showAddress = useCallback(() => {
    frontendSDK.wallet.showAddress({blockchainId: 'ethereumSepolia'});
  }, [frontendSDK]);

  const renderContent = () => {
    if (addressLoading) {
      return <Text>Loading...</Text>;
    }

    return (
      <>
        {address && <Text>{address}</Text>}
        <Text onPress={showAddress}>Show QR code</Text>
      </>
    );
  };

  return <S.Container>{renderContent()}</S.Container>;
};

export default LoggedIn;

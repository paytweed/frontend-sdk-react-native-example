import {useCallback} from 'react';
import {fetchPost} from '../util';
import {TweedFrontendMobileSdkProvider} from '@paytweed/frontend-sdk-react-native';
import Wallet from './Wallet';

const Example = () => {
  const sendMessageToBackend = useCallback(async (message: string) => {
    const {answer} = await fetchPost('message', {message});
    return answer;
  }, []);

  return (
    <TweedFrontendMobileSdkProvider
      defaultBlockchainIds={['ethereumSepolia']}
      sendMessageToBackend={sendMessageToBackend}>
      <Wallet />
    </TweedFrontendMobileSdkProvider>
  );
};

export default Example;

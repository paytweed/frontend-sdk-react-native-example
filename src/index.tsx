import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Example from './Example';
import S from './style';

export const Application = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <S.Container>
        <Example />
      </S.Container>
    </SafeAreaView>
  </>
);

export default Application;

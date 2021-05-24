import React from 'react';
import {Container, Content, Icon} from 'native-base';
import CardComponent from '../CardComponent';
import {StyleSheet} from 'react-native';

function HomeTab(props) {
  return (
    <Container style={style.container}>
      <Content>
        <CardComponent />
      </Content>
    </Container>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default HomeTab;

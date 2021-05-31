import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Thumbnail,
  Body,
  Right,
  Button,
  Image,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function ProfileTab(props) {
  return (
    <Container style={{flex: 1, backgroundColor: 'white'}}>
      <Header style={{backgroundColor: 'white'}}>
        <Left>
          <Text style={style.account}>yoonjeon_im✨</Text>
        </Left>
        <Right>
          <MaterialIcons
            name="add-circle-outline"
            size={29}
            style={{paddingHorizontal: 8}}
          />
          <MaterialIcons name="menu" size={29} style={{paddingHorizontal: 8}} />
        </Right>
      </Header>
      <Content>
        <View
          style={{flexDirection: 'row', paddingTop: 10, alignItems: 'center'}}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Thumbnail
              style={style.accountImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1586788224331-947f68671cf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
              }}
            />
          </View>
          <View style={{flex: 3}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={{alignItems: 'center'}}>
                <Text style={style.countNumber}>4</Text>
                <Text style={style.category}>게시물</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={style.countNumber}>33</Text>
                <Text style={style.category}>팔로워</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={style.countNumber}>34</Text>
                <Text style={style.category}>팔로잉</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={{fontWeight: 'bold', marginLeft: 20}}>김윤전</Text>
        <View style={{flexDirection: 'row'}}>
          <Button
            bordered
            dark
            style={{
              flex: 1,
              marginHorizontal: 10,
              justifyContent: 'center',
              height: 30,
              marginTop: 16,
            }}>
            <Text>프로필 편집</Text>
          </Button>
        </View>
        <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
          <Text>Konkuk Univ | Smart ICT Fusion Technology | WIT</Text>
          <Text>📌https://github.com/bella0413📌</Text>
        </View>
        <View style={style.container}>
          <Text style={style.noPost}>아직 게시물이 없습니다</Text>
        </View>
      </Content>
    </Container>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  account: {
    fontSize: 15,
    width: 200,
    fontWeight: 'bold',
    paddingLeft: 6,
  },
  accountImage: {
    height: 70,
    width: 70,
    overflow: 'hidden',
    borderWidth: 1,
    marginVertical: 10,
    marginLeft: 20,
    borderRadius: 50,
    borderColor: '#e0e0e0',
  },
  countNumber: {
    fontWeight: '700',
    fontSize: 18,
  },
  category: {
    fontSize: 13,
    fontWeight: '700',
    color: '#757575',
  },
  noPost: {
    marginTop: 100,
    fontSize: 16,
    color: '#757575',
  },
});

export default ProfileTab;

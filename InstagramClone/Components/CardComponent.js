import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function CardComponent(props) {
  return (
    <Card style={{borderRadius: 10}}>
      <CardItem style={{marginVertical: -14}}>
        <Left>
          <Thumbnail
            style={{
              height: 40,
              width: 40,
              overflow: 'hidden',
              borderWidth: 1,
              marginBottom: 10,
              marginTop: 10,
              borderColor: '#e0e0e0',
            }}
            source={{
              uri: 'https://images.unsplash.com/photo-1586788224331-947f68671cf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
            }}
          />
          <Body>
            <Text style={{fontWeight: 'bold'}}>yoonjeon_im✨</Text>
          </Body>
        </Left>
        <Right>
          <Button transparent>
            <MaterialCommunityIcons
              name="dots-horizontal"
              style={{color: '#262626'}}
              size={30}
            />
          </Button>
        </Right>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1524698604136-5a02fb1f7ec9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
          }}
          style={{height: 290, width: null, flex: 1}}
        />
      </CardItem>
      <CardItem style={{height: 45}}>
        <Left>
          <Button transparent>
            <Icon name="ios-heart" style={{color: '#ed4956'}} />
          </Button>
          <Button transparent>
            <Icon name="ios-chatbubble-outline" style={{color: '#262626'}} />
          </Button>
          <Button transparent>
            <Icon name="ios-send" style={{color: '#262626'}} />
          </Button>
        </Left>
        <Right>
          <Button transparent>
            <Icon name="ios-bookmark-outline" style={{color: '#262626'}} />
          </Button>
        </Right>
      </CardItem>
      <CardItem style={{height: 40, marginVertical: -10}}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>좋아요 15개</Text>
      </CardItem>
      <CardItem style={{marginBottom: 10}}>
        <Text>
          <View>
            <Text
              style={{
                textAlign: 'center',
                paddingRight: 10,
                fontWeight: 'bold',
              }}>
              yoonjeon_im✨
            </Text>
          </View>
          리액트 네이티브.. 신기한데 어렵고 재밌는데 힘들군요.. 하하하하하
        </Text>
      </CardItem>
    </Card>
  );
}

export default CardComponent;

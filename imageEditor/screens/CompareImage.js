import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const CompareImage = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 18, color: '#6BDCC2', marginLeft: 'auto'}}>저장</Text>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{position:'relative' }}>
                    <Image style={styles.image} source={require(`../assets/images/book.png`)}></Image>
                    <View style={styles.inputContainer}>
                        <SimpleLineIcons name="pencil" size={20} color={'#ffffff'} />
                        <TextInput
                            style={{color: '#ffffff', paddingLeft: 10}}
                            placeholder="최대 20글자"
                            placeholderTextColor='#ffffff'
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        height: '100%',
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    image: {
        width: 310,
        height: 310,
        borderRadius: 4,
        position: 'relative'
    },
    inputContainer: {
        backgroundColor: 'rgba(129, 129, 129, 0.7)',
        width: 310,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 0,
    }
});

export default CompareImage;

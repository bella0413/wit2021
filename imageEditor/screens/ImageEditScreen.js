import React, {useState} from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import ImagePicker from 'react-native-image-crop-picker';

const ImageEditScreen = () => {
    const [image, setImage] = useState('https://images.unsplash.com/photo-1576515652031-fc429bab6503?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
                        
    const takePhotoFromCamera = () => {
        try {
            ImagePicker.openCamera({
                compressImageMaxWidth: 300,
                compressImageMaxHeight: 300,
                cropperActiveWidgetColor: 'blue',
                cropperToolbarColor: 'yellow',
                cropperStatusBarColor: 'red',
                cropperToolbarWidgetColor: 'green',
                cropperToolbarTitle: '티끌',
                cropping: true,
                compressImageQuality: 0.7
            }).then(image => {
                console.log(image);
                setImage(image.path);
                bs.current.snapTo(1);
            });
        } catch (errpr) {
            console.log(error);
            return (false);
        }
    }
    
    const choosePhotoFromLibrary = () => {
        try {
            ImagePicker.openPicker({
                width: 300,
                height: 300,
                cropperActiveWidgetColor: 'blue',
                cropperStatusBarColor: 'red',
                cropperToolbarColor: 'yellow',
                cropperToolbarWidgetColor: 'green',
                cropperToolbarTitle: '티끌',
                cropping: true,
                compressImageQuality: 0.7
            }).then(image => {
                console.log(image);
                setImage(image.path);
                bs.current.snapTo(1);
            });
        } catch (error) {
            console.log(error);
            return (false);
        }
    }

    const renderContent = () => (
        <View style={styles.panel}>
            <View style={{alignItems: 'center'}}>
            <Text style={styles.panelTitle}>Upload Photo</Text>
            <Text style={styles.panelSubtitle}>Choose Your Ticcle Picture</Text>
            </View>
            <View style={{ paddingtop: 20, height: '100%' }}>
                <TouchableOpacity onPress={takePhotoFromCamera} style={{paddingVertical: 10}}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={choosePhotoFromLibrary} style={{paddingVertical: 10}}>
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => bs.current.snapTo(1)} style={{paddingVertical: 10}}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
            <View style={styles.panelHandle} />
            </View>
        </View>
    );

    const bs = React.useRef();
    const fall = new Animated.Value(1);

    return (
        <View style={styles.container}>
            <BottomSheet
            ref={bs}
            snapPoints={[330, 0]}
            renderContent={renderContent}
            renderHeader={renderHeader}
            initialSnap={1}
            callbackNode={fall}
            enabledGestureInteraction={true}
            enabledContentTapInteraction={false}/>
            <Animated.View style={{margin: 20,
            opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)), flex:1, justifyContent: 'center',}}>
                <Text style={{fontSize:25, fontWeight: '700', paddingBottom: 80}}>Iamge Editor Pactice</Text>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                        <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <ImageBackground
                                source={{
                                uri: image,
                                }}
                                style={{height: 200, width: 200}}
                                imageStyle={{borderRadius: 15}}>
                                    <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Icon
                                        name="camera"
                                        size={35}
                                        color="#fff"
                                        style={{
                                        opacity: 0.7,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderWidth: 1,
                                        borderColor: '#fff',
                                        borderRadius: 10,
                                        }}
                                    />
                                    </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    );
};
    
export default ImageEditScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#efefef',
        paddingTop: 20,
        height: 300,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#42a6f1',
    },
});

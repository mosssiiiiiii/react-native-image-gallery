import React from 'react';
import {View,Image,StyleSheet} from 'react-native';


function Gallery({images}){
    return(
        <>
            <View style={style.imageWrap}>
                <Image style={style.image} source={{uri: images[0]}}/>
            </View>
        </>
    )
}

const style =  StyleSheet.create({
    imageWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 250,
        width: 250,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 15,
        marginBottom: 15
    },
    image: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        resizeMode: 'contain'
    },
});

export default Gallery;

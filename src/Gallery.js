import React, {useState,useEffect} from 'react';
import {View, Dimensions, ScrollView, Image, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
const WIDTH = Dimensions.get('window').width;


function Gallery(props) {
    const {images, quantity, more, navigation, height,width,activeColor} = props;
    const [main, setMain] = useState(images[0])

    useEffect(() =>{

    },[main])

    const changeHandler = (item) => {
        setMain(item)
    }

    const renderThumbnail = () => {
        return [...images].splice(0, quantity).map((item, index) =>
            <TouchableOpacity key={index} onPress={() => changeHandler(item)} style={[style.thumbnail,item===main && {borderColor: activeColor}]}>
                <Image style={style.image} source={{uri: item}}/>
            </TouchableOpacity>
        )
    }


    let thumbnail;
    if (more) {
        thumbnail =
            <View style={{padding: 15, flexDirection: 'row', justifyContent: 'center'}}>
                {renderThumbnail()}
                <TouchableOpacity onPress={navigation} style={style.more}>
                    <View style={style.dot}/>
                    <View style={style.dot}/>
                    <View style={style.dot}/>
                </TouchableOpacity>
            </View>
    } else {
        thumbnail =
            <ScrollView contentContainerStyle={{padding: 15}} showsHorizontalScrollIndicator={false} horizontal={true}>
                {renderThumbnail()}
            </ScrollView>
    }

    return (
        <>
            <View style={[style.mainWrap, {width,height}]}>
                <Image style={style.image} source={{uri: main}}/>
            </View>
            {thumbnail}
        </>
    )
}

const style = StyleSheet.create({
    mainWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
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
    more: {
        width: 60,
        height: 60,
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: '#e5e5e8',
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        width: 5,
        height: 5,
        backgroundColor: '#868585',
        margin: 5,
        borderRadius: 100,
    },
    thumbnail: {
        width: 60,
        height: 60,
        padding: 10,
        borderWidth: 1,
        borderColor: '#868585',
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

Gallery.propTypes = {
    images: PropTypes.array,
    quantity: PropTypes.number,
    more: PropTypes.bool,
    navigation: PropTypes.object,
    height: PropTypes.number,
    width: PropTypes.number,
    activeColor: PropTypes.string,
}

Gallery.defaultProps = {
    more: false,
    activeColor: 'blue',
    width: WIDTH
}
export default Gallery;

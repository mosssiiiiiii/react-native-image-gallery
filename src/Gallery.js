import React,{useState} from 'react';
import {View,Image,TouchableOpacity,StyleSheet} from 'react-native';


function Gallery({images}){
    const [main,setMain] = useState(images[0])

    const changeHandler = (item) =>{
        setMain(item)
    }

    return(
        <View>
            <View style={style.imageWrap}>
                <Image style={style.image} source={{uri: main}}/>
            </View>

            <View style={{flexDirection: 'row',justifyContent:'center'}}>
                {
                    [...images].splice(0,3).map((item,index) =>
                        <TouchableOpacity key={index} onPress={() => changeHandler(item)} style={style.thumbnail}>
                            <Image style={style.image} source={{uri: item}} />
                        </TouchableOpacity>
                    )
                }
                <View style={style.more}>
                    <View style={style.dot}/>
                    <View style={style.dot}/>
                    <View style={style.dot}/>
                </View>
            </View>

        </View>
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
    more:{
        width:60,
        height:60,
        borderWidth:1,
        flexDirection: 'row',
        borderColor:'#e5e5e8',
        marginRight:5,
        justifyContent:'center',
        alignItems:'center'
    },
    dot:{
        width: 5,
        height: 5,
        backgroundColor: '#868585',
        margin: 5,
        borderRadius:100,
    },
    thumbnail:{
        width:60,
        height:60,
        padding:10,
        borderWidth:1,
        borderColor:'#868585',
        marginRight:5,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default Gallery;

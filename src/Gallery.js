import React from 'react';
import {View} from 'react-native';


function Gallery({images}){
    console.log(typeof images);
    return(
        <View>

        </View>
    )
}

Gallery.propTypes = {
    images: PropTypes.array.isRequired,
}


export default Gallery;

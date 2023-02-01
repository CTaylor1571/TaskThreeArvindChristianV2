import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';

function ImageBox({text, backColor, textColor}){
    return(
        <View style={[styles.container, {backgroundColor: backColor}]}>
            <Image style={styles.image} source={{uri: 'https://i.kym-cdn.com/photos/images/facebook/002/440/090/bdc.jpg'}}/>
            <Text style={[styles.text, {color: textColor}]} >
                {text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 200,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        flex: 5,
        height: 150,
        width: 150,
    },
    text: {
        fontSize: 20,
        flex: 1,
    }
})
export default ImageBox;
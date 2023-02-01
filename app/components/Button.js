import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';

function CustomButton({title, onPress, backColor, textColor, highlightColor}){
    return(
        <TouchableHighlight
            style={[styles.button, {backgroundColor: backColor}]}
            onPress={onPress}
            underlayColor={highlightColor}
            >
                <Text
                    style={[styles.text, {color: textColor}]}
                >{title}</Text>
            </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center', 
        height: 80,
        width: 150,
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
})
export default CustomButton;
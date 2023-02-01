import React from 'react';
import { StyleSheet  } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function CustomIcon({name, color, size, margin}){
    return (
        <AntDesign name={name} size={size} color={color} />
    );
}

export default CustomIcon;
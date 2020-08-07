import React from 'react';
import { View, ImageBackground } from 'react-native';

import giveCalssesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
    return (
        <View style={styles.container}>
            <ImageBackground source={giveCalssesBgImage} style={styles.content}>
               
            </ImageBackground>
        </View>
    );
}

export default GiveClasses;
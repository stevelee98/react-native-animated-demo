import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, Pressable, Image, Animated } from 'react-native';
import styles from './styles';
import cat from 'images/cat.jpg'

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.fade = new Animated.Value(0);
    }

    fadeIn = () => {
        Animated.timing(this.fade, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }).start()
    }

    fadeOut = () => {
        Animated.timing(this.fade, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true
        }).start()
    }


    render() {
        return (
            <View style={styles.container}>
                <Animated.Image source={cat}
                    style={{
                        opacity: this.fade,
                        width: 250,
                        height: 250, borderRadius: 60
                    }} />
                <View style={{ flexDirection: 'row', marginTop: 24 }}>
                    <Pressable
                        onPress={this.fadeIn}
                        android_ripple={styles.ripple}
                        style={styles.btnFade}
                    >
                        <Text>Fade in</Text>
                    </Pressable>
                    <Pressable
                        onPress={this.fadeOut}
                        android_ripple={styles.ripple}
                        style={styles.btnFade}
                    >
                        <Text>Fade out</Text>
                    </Pressable>
                </View>
            </View>
        );
    }
}

export default HomeView;

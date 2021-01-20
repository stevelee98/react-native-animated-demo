import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, Pressable, Image, Animated } from 'react-native';
import styles from './styles';
import cat from 'images/cat.jpg'

class Spring extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.fade = new Animated.Value(100);
    }

    fadeIn = () => {
        Animated.spring(this.fade, {
            toValue: 200,
            tension: 10,
            friction: 2
        }).start()
    }

    fadeOut = () => {
        Animated.spring(this.fade, {
            toValue: 100,
            tension: 10,
            friction: 2
        }).start()
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.Image source={cat}
                    style={{
                        width: 250,
                        height: this.fade, borderRadius: 60
                    }} />
                <View style={{ flexDirection: 'row', marginTop: 24 }}>
                    <Pressable
                        onPress={this.fadeIn}
                        android_ripple={styles.ripple}
                        style={styles.btnFade}
                    >
                        <Text>Cao lên</Text>
                    </Pressable>
                    <Pressable
                        onPress={this.fadeOut}
                        android_ripple={styles.ripple}
                        style={styles.btnFade}
                    >
                        <Text>Lùn xuống</Text>
                    </Pressable>
                </View>
            </View>
        );
    }
}

export default Spring;

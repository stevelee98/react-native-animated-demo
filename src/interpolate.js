import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimensions, Animated } from 'react-native';
import styles from './styles'
const IMG = [
    'https://genk.mediacdn.vn/thumb_w/600/2017/mwsnap004-1484714735215.png',
    'https://www.laohac.vn/wp-content/uploads/2020/10/6-min-356x220.png',
    'https://miaolands.com/wp-content/uploads/2019/03/Husky-m%E1%BA%B7t-ng%C3%A1o-1.jpg',
    'https://i.pinimg.com/236x/64/a8/4e/64a84eaaabaaf5965b36cc060840040e.jpg',
    'https://icdn.dantri.com.vn/thumb_w/640/2020/05/16/bat-cuoi-hinh-anh-dong-vat-hoang-da-qua-hai-huocdocx-1589610230595.jpeg',
    'https://st.quantrimang.com/photos/image/2020/06/19/Hinh-Nen-Meo-Ngao-38.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo0VKVSZOYNSK2KKJ8_4Lhp7ZvHhA87AG20g&usqp=CAU',
    'https://genk.mediacdn.vn/thumb_w/600/2017/mwsnap004-1484714735215.png',
    'https://www.laohac.vn/wp-content/uploads/2020/10/6-min-356x220.png'
]
const MAX_WIDTH = Dimensions.get('screen').width
const HEIGHT_IMAGE = MAX_WIDTH * (9 / 16)
class Interpolate extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.scrollY = new Animated.Value(0);
    }

    render() {
        let width = this.scrollY.interpolate({
            inputRange: [0, HEIGHT_IMAGE],
            outputRange: [MAX_WIDTH, 100],
            extrapolate: 'clamp',
            useNativeDriver: true
        })
        let height = this.scrollY.interpolate({
            inputRange: [0, HEIGHT_IMAGE],
            outputRange: [HEIGHT_IMAGE, 100],
            extrapolate: 'clamp',
            useNativeDriver: true
        })
        let borderRadius = this.scrollY.interpolate({
            inputRange: [0, HEIGHT_IMAGE],
            outputRange: [0, 100],
            extrapolate: 'clamp',
            useNativeDriver: true
        })
        return (
            <View style={{ flex: 1 }}>
                <Animated.Image
                    source={{ uri: IMG[4] }} style={{
                        width: width,
                        height: height,
                        borderRadius: borderRadius,
                        alignSelf: 'center'
                    }} />
                <ScrollView
                    onScroll={Animated.event([
                        { nativeEvent: { contentOffset: { y: this.scrollY } } }
                    ])}
                    style={{ paddingHorizontal: 16, flexGrow: 1 }}
                >
                    <View>
                        <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#555' }}>Hé lô bà con</Text>
                        <Text style={{ fontSize: 16 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationr</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#555' }}>Món ngon</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Image source={{ uri: IMG[0] }} style={styles.img} />
                            <Image source={{ uri: IMG[1] }} style={styles.img} />
                            <Image source={{ uri: IMG[3] }} style={styles.img} />
                            <Image source={{ uri: IMG[4] }} style={styles.img} />
                            <Image source={{ uri: IMG[5] }} style={styles.img} />
                            <Image source={{ uri: IMG[6] }} style={styles.img} />
                            <Image source={{ uri: IMG[7] }} style={styles.img} />
                            <Image source={{ uri: IMG[4] }} style={styles.img} />
                            <Image source={{ uri: IMG[5] }} style={styles.img} />
                            <Image source={{ uri: IMG[6] }} style={styles.img} />
                            <Image source={{ uri: IMG[7] }} style={styles.img} />
                            <Image source={{ uri: IMG[5] }} style={styles.img} />
                            <Image source={{ uri: IMG[6] }} style={styles.img} />
                            <Image source={{ uri: IMG[7] }} style={styles.img} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Interpolate;

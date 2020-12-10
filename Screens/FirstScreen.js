import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, Button, TouchableWithoutFeedback } from 'react-native';
import { Fontisto, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function FirstScreen() {
    const navigation = useNavigation();

    const onClickLogin = () => {
        navigation.navigate('Login')
    }
    const onClickCreateNew = () => {
        navigation.navigate('NewAccount')
    }
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Main.jpeg')} style={styles.image} />
            <Text style={styles.title}>
                Lorem Ipsum
        </Text>
            <Text style={styles.subTitle}>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </Text>
            <View style={styles.iconView}>
                <View style={styles.iconContainer}>
                    <Fontisto name="facebook" size={32} color='#fff' style={styles.icon} />
                </View>

                <View style={styles.iconContainer}>
                    <Fontisto name="snapchat" size={32} color='#fff' style={styles.icon} />
                </View>

                <View style={styles.iconContainer}>
                    <Fontisto name="instagram" size={32} color='#fff' style={styles.icon} />
                </View>


            </View>
            <View style={{ padding: 20, justifyContent: 'space-between' }}>
                <TouchableWithoutFeedback style={{ margin: 20, paddingTop: 10 }} onPress={onClickLogin}>
                    <View style={{
                        width: 300,
                        height: 50,
                        border: 2,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        alignContent: 'center',
                        margin: 10,
                        borderRadius: 10
                    }}>
                        <Text style={{ alignSelf: 'center', alignContent: 'center', padding: 15, fontSize: 18, color: 'blue' }}>
                            Login
                    </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{ margin: 20, paddingTop: 10 }} onPress={onClickCreateNew}>
                    <View style={{
                        width: 300,
                        height: 50,
                        border: 2,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        alignContent: 'center',
                        margin: 10,
                        borderRadius: 10
                    }}>
                        <Text style={{ alignSelf: 'center', alignContent: 'center', padding: 15, fontSize: 18, color: 'blue' }}>
                            Create An Account
                    </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    image: {
        height: 300,
        width: 300,
        resizeMode: 'cover',
        marginTop: 100,
        borderRadius: 40
    },
    title: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 36

    },
    subTitle: {
        color: 'gray',
        fontWeight: 'bold',
        margin: 24,
        justifyContent: 'center'
    },
    iconContainer: {
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 2,
        alignItems: 'center',
        margin: 10
    }, icon: {
        padding: 10
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button: {
        width: 300,
        height: 50,
        borderWidth: 2

    }
});


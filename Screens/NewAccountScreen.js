import React from 'react';
import { View, Text, SafeAreaView, Dimensions, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



const { width, height } = Dimensions.get('screen');

export default function NewAccountScreen() {
    const navigation = useNavigation();


    const onClickLogin = () => {
        navigation.navigate('Login')
    }
    const onClickCreateNew = () => {
        navigation.navigate('NewAccount')
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'blue' }}>
            <BottomSheet
                initialSnapIndex={0}
                snapPoints={['80%', '100%']}
                style={{
                    backgroundColor: 'blue',
                }}
                contentContainerStyle={{
                    padding: 20
                }}
            >
                <View style={{
                    backgroundColor: 'white',
                    flex: 1,
                    alignItems: 'center'
                }}>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.subTitle}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</Text>
                    <TextInput placeholder={'Email'} style={styles.textInput} placeholderTextColor='black' />
                    <TextInput placeholder={'Password'} style={styles.textInput} placeholderTextColor='black' />

                    <View style={{ paddingTop: 200, justifyContent: 'space-between' }}>
                        <TouchableWithoutFeedback style={{ margin: 20, paddingTop: 40 }} onPress={onClickLogin}>
                            <View style={{
                                width: 380,
                                height: 50,
                                border: 2,
                                backgroundColor: 'blue',
                                alignItems: 'center',
                                alignContent: 'center',
                                margin: 10,
                                borderRadius: 10
                            }}>
                                <Text style={{ alignSelf: 'center', alignContent: 'center', padding: 15, fontSize: 18, color: 'white' }}>
                                    Login
                    </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style={{ margin: 20, paddingTop: 10 }} onPress={onClickCreateNew}>
                            <View style={{
                                width: 380,
                                height: 50,
                                border: 2,
                                backgroundColor: 'blue',
                                alignItems: 'center',
                                alignContent: 'center',
                                margin: 10,
                                borderRadius: 10
                            }}>
                                <Text style={{ alignSelf: 'center', alignContent: 'center', padding: 15, fontSize: 18, color: 'white' }}>
                                    Don't have an account? Create One!!!
                    </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>

            </BottomSheet>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    }, textInput: {
        height: 50,
        width: 380,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        padding: 20,
        margin: 10

    }, title: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 18,
        margin: 24, textAlign: 'center',
        color: 'gray'
    },
    button: {
        width: 300,
        height: 50,
        borderWidth: 2,
        backgroundColor: 'blue'
    }
});

import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, Text, Image, Pressable } from 'react-native'
export default function Mealitem(props) {
    const navigator = useNavigation();
    const hanldePress = () => {
        navigator.navigate("ExpandDetail", {
            id: props.id,

        })


    }
    return <>
        <View style={
            style.container
        }>
            <Pressable onPress={hanldePress} style={({ pressed }) => pressed ? style.pressed : style.notpressed} android_ripple={{ color: 'white' }}>
                <View>
                    <Image resizeMode='cover'
                        style={
                            style.image
                        }
                        source={
                            { uri: props.imageurl }
                        } />
                    <Text style={
                        style.title
                    }>
                        {
                            props.title
                        } </Text>
                </View>
                <View style={style.detailtext}>
                    <Text style={style.text}>{
                        props.duration
                    }</Text>
                    <Text style={style.text}>{
                        props.complexity
                    }</Text>
                    <Text>{
                        props.affordability
                    } </Text>

                </View>
            </Pressable>
        </View>

    </>
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        overflow: 'hidden',
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 16,

    },
    pressed: {
        opacity: 0.5,
    },
    notpressed: {
        opacity: 1
    },
    image: {
        width: '100%',
        height: 200,
        borderWidth: 2
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold'


    },
    detailtext:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        textAlign: 'center',
        width: '100%'

    }
});

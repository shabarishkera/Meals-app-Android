import React, { useEffect } from 'react'
import { Text,View,StyleSheet,Image } from 'react-native'
import { MEALS } from '../data/data'
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import {MyIcon} from '../components/MyIcon';
export default function MealDetailedScreen({route,navigation}) {
    var ob;
    navigation.setOptions({
        headerRight :()=>{return <MyIcon onPress={iconhandlePress} color='white' iconName='star' />}
    });

   ob=MEALS.find((item)=>{ return item.id==route.params.id});
   console.log(ob.ingredients)
  return (
    <ScrollView style={style.container}>
<View style={style.container}>
    <Image style={style.image} source={{uri:ob.imageUrl}}/>
 
    <Text style={style.h1}>{ob.title}</Text>
    <View style={style.desc}>
    <Text style={style.h2}>ingredients</Text>

 {ob.ingredients.map((item)=>{return <Text key={item}>{item}</Text>})}

<View style={style.steps}>
    <Text style={style.h2}>Steps</Text>
    {ob.steps.map((item)=>{return <Text key={item}>* {item}</Text>})}
</View></View></View>
</ScrollView>
  )
}
const style=StyleSheet.create({
    container:{
flex:1,

    },
    image:{
        width:'100%',
        height:280,
    },
    desc:{
        padding:10,
    },
    h2:{
        fontSize:22,
        fontWeight:'bold',
        fontFamily:'monospace',
        margin:5,
        borderBottomWidth:2
    },
    h1:{
        fontSize:28,
        fontWeight:'900',
    },
    flatlist:{
        textAlign:'center',
    },
    steps:
    {
maxHeight:300

    }
})  

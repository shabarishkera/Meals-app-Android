import React, { useContext, useEffect } from 'react'
import { Text,View,StyleSheet,Image } from 'react-native'
import { MEALS } from '../data/data'
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import {MyIcon} from '../components/MyIcon';
import { useNavigation } from '@react-navigation/native';
import { Button,Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { context } from '../store/cotext/fav';
export default function MealDetailedScreen({route}) {
    var ob;
    const navigation=useNavigation();
 
    const {fav,removefav,addfav}=useContext(context)
   ob=MEALS.find((item)=>{ return item.id==route.params.id});
   const isFav=fav.includes(ob.id);
   navigation.setOptions({headerRight:()=>{return <Pressable onPress={hanldefavPress} > 
    <AntDesign name={isFav?'star':'staro'} size={24} color="white" />
 </Pressable>}});

   const hanldefavPress=()=>
   {
    if(isFav)
    removefav(ob.id);
    else
    addfav(ob.id);


   }
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

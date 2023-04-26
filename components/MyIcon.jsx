import React from 'react'
import { Pressable,StyleSheet } from 'react-native'
import Ionicons from "@expo/vector-icons"
export default function MyIcon({OnPress,iconName,color}) {
  return (
 <Pressable onPress={onPress}> 
    <Ionicons name ={iconName} size={24} color={color} />
 </Pressable>
  )
}
const style=StyleSheet.create({

})
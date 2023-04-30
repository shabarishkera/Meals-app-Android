import React from 'react'
import { Pressable,StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
 function MyIcon({onPress,iconName,color}) {
  return (
 <Pressable onPress={onPress}> 
    <AntDesign name="staro" size={24} color="black" />
 </Pressable>
  )
}
const style=StyleSheet.create({
container:{


}
})
export default MyIcon;
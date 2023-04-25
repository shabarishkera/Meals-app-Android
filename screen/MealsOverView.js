import React from 'react'
import { Text } from 'react-native'
import { MEALS } from '../data/data';
import {View, StyleSheet} from 'react-native'
import { FlatList } from 'react-native';
import Mealitem from '../components/Mealitem';
function MealsOverView({route}) {
const id=route.params.id;

const relatedmeal=MEALS.filter((item)=>{

   return  item.categoryIds.indexOf(id)>=0;
  })
  
  const renderitem=(item)=>
  {
item=item.item;
return <Mealitem duration={item.duration} complexity={item.complexity} affordability={item.affordability} imageurl={item.imageUrl} title={item.title} />

  }
  return  (<>
  <View style={styles.container}>
 <FlatList data={relatedmeal} key={(item)=>item.id} renderItem={renderitem} />
  </View>
    </>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default MealsOverView;

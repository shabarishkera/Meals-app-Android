import React, { useContext } from 'react'
import { Text } from 'react-native'
import { MEALS } from '../data/data';
import {View, StyleSheet} from 'react-native'
import { FlatList } from 'react-native';
import Mealitem from '../components/Mealitem';
import { context } from '../store/cotext/fav';
function FavoitesScreen() 
{
    const {fav}=useContext(context);
const favlist=MEALS.filter((item)=>fav.includes(item.id));
console.log(favlist);
  
  const renderitem=(item)=>
  {
item=item.item;
return <Mealitem id={item.id} duration={item.duration} complexity={item.complexity} affordability={item.affordability} imageurl={item.imageUrl} title={item.title} />

  }
  return  (<>
  <View style={styles.container}>
 <FlatList data={favlist} key={(item)=>item.id} renderItem={renderitem} />
  </View>
    </>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default FavoitesScreen;

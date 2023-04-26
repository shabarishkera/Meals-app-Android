import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screen/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverView from './screen/MealsOverView';
import { MEALS } from './data/data';
import MealDetailedScreen from './screen/MealDetailedScreen';
import { Button } from 'react-native';

export default function App() {
  const stack=createNativeStackNavigator();
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
     <stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#35141'},
    headerTintColor:'white'}}>
      <stack.Screen  name='HOME'  options={{title:'Welocme'}} component={CategoryScreen} />
      <stack.Screen  name='DETAILS' options={({route,navigation})=>{
        return {
          title:route.params.title
        }
      }} component={MealsOverView} />
      <stack.Screen name='ExpandDetail'  component={MealDetailedScreen}/>
    </stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import {FlatList, StyleSheet,Pressable} from "react-native";
import CATEGORIES from "../data/data";
import Categorygrid from "../components/categorygrid";
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
function CategoryScreen({navigation}) {
    const gotofav=()=>
    {
navigation.navigate("favScreen");
    }
    const renderitem = ({item}) => {
        navigation.setOptions({headerRight:()=>{return <Pressable onPress={gotofav} > 
       <Fontisto name="favorite" size={24} color="white" />
     </Pressable>}});
    
        function pressHandler()
        {
    navigation.navigate("DETAILS",{id:item.id,title:item.title});
        }
        return <Categorygrid onPress={pressHandler}
            title={
                item.title
            }
            color={
                item.color
            }/>
    }
    return <FlatList data={CATEGORIES}
        key={
            (item) => item.id
        }
        renderItem={renderitem}
        numColumns={2}/>
}
export default CategoryScreen;
const style = StyleSheet.create({

    container: {
        flex: 1
    }
})

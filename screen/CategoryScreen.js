import {FlatList, StyleSheet} from "react-native";
import CATEGORIES from "../data/data";
import Categorygrid from "../components/categorygrid";
import { useNavigation } from "@react-navigation/native";
function CategoryScreen({navigation}) {
    const renderitem = ({item}) => {
        console.log(item);
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

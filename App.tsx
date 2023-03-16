import { StyleSheet, View, Dimensions, Text, FlatList, Touchable, TouchableOpacity, Image } from "react-native";
import React from "react";

const App = () => {



    return (
        <View style={styles.container}>

            <Text style={styles.text}> Book App

            </Text>
            
            <Text style={styles.text}> New Books 

            </Text>
<View style={{marginTop:30}}>
<FlatList horizontal 
showsHorizontalScrollIndicator={false} data={[1, 1, 1, 1, 1, 1]} renderItem={({ item, index }) => {

return (
    <TouchableOpacity 
    style={{ width: 120,
     height: 120,
         borderRadius: 10,
          borderWidth: 1,
           borderColor: 'white',
            marginLeft: 20, }}
            >

        <Image source={require('.src/book-icon.png') } style={{width:50, height:50, alignSelf:'center' ,marginTop:20,}}/>
        <Text style={{color:'white' ,alignSelf:'center' ,marginTop:20,fontWeight:'700',}}></Text>
    </TouchableOpacity>

);
}} />
<Text style={styles.text}> Trending Book 

</Text>
<FlatList  numColumns={2 }
 data={[1, 1, 1, 1, 1, 1]} renderItem={({ item, index }) => {

return (
    <View style={{width:'50%',height:130,justifyContent:"center" ,}}>
        <TouchableOpacity 
    style={{ width: '80%',
     height: 120,
         borderRadius: 10,
          borderWidth: 1,
           borderColor: 'white',
            marginTop: 20, }}
            >

        <Image source={require('.src/book-icon.png') } style={{width:50, height:50, alignSelf:'center' ,marginTop:20,}}/>
        <Text style={{color:'white' ,alignSelf:'center' ,marginTop:20,fontWeight:'700',}}>
            {'Book'+(index + 1 )}
        </Text>
        <Text style ={{
            fontSize:100,
            color:"#00FFFF",
            position:"absolute",
            left:-20,


        }}
         > {index +1 }</Text>
    </TouchableOpacity>
    </View>

);
}} />
</View>
        </View>



    );
}
export default App;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    text: {

        color: 'white',
        fontSize: 25,
        fontWeight: '700',
        marginTop: 30,
        marginLeft: 20,
    }
});
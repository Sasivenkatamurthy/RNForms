import {Text, StyleSheet,TextInput, SafeAreaView,Switch, View} from 'react-native'
import React from 'react'
import { useState } from 'react';
export default function InputFolders() {
    const [name,setName]=useState("")
    const[isDarkMode,setIsDarkMode]=useState(false)
 return (
    <SafeAreaView style={Styles.Container}>
        
        <TextInput style={Styles.input} value={name} onChangeText={setName} 
            placeholder='email@example.com' secureTextEntry 
            // keyboardType='number-pad' 
            keyboardType='default'
            autoCorrect={true}
            autoCapitalize='none'
            />
        <TextInput style={[Styles.input,Styles.multilineText]} placeholder='Message' multiline />
        <Text style={Styles.text}>name is {name}</Text>
         
        <View style={Styles.switchContainer}>
             <Text style={Styles.text}>Dark Mode</Text>
             <Switch value={isDarkMode} 
                    onValueChange={()=>setIsDarkMode((previousState)=>!previousState)}
                        trackColor={{false:"red",true:"lightblue"}}
                        thumbColor="#F4F3F4"
                    />
        </View>


        


   </SafeAreaView>
  );
}

const Styles=StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'#fff',
    alignContent:'center',
    justifyContent:'center',
  
  },input :{
    height:40,
    margin:12,
    padding:10,
    borderWidth:4,
    borderRadius:13,
  },text:{
    fontSize:20,
    fontWeight:'bold',
    paddingHorizontal:14
  }
  ,
  multilineText:{
    minHeight:100,
    textAlignVertical:'top',
  },switchContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:17,
  }
})
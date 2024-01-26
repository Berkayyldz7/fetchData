import {SafeAreaView, Text, Pressable, StyleSheet, View} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import {useState, useEffect} from "react"

import {useDispatch, useSelector} from "react-redux"
import {setClicked} from "../src/store/productSlice"


const HomePage = ({navigation})=>{

  const {clicked} = useSelector((state)=>state.user)

  const dispatch = useDispatch()

  
  return(
    <LinearGradient colors={['rgba(0,0,0,0.4)', 'transparent']}
    style={ [styles.main,{backgroundColor:"lightgreen"}] }
    >
      <SafeAreaView style={ styles.main }>
        <Text>Ana Sayfaya Hos Geldiniz </Text>
        <Pressable 
        onPress={()=>{ navigation.navigate("Product"); dispatch(setClicked(true)) }}
        style={({pressed}) => [pressed ? styles.unPressButton : styles.pressButton ]}
        >

        <Text style={ {color:"white" }}> ürünler için tıklayın {clicked} </Text>

        

        </Pressable>

      </SafeAreaView>

   </LinearGradient>
  )
}

export default HomePage


const styles = StyleSheet.create({
  pressButton : {
    width:'30%',
    height:'12%',
    borderWidth:1,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    backgroundColor:"lightblue"
  },
    main : {
    justifyContent:'center',
    alignItems:'center',
    paddingTop: 30,
    width:'100%',
    height:'100%',    
  },
  unPressButton : {
    width:'30%',
    height:'12%',
    borderWidth:1,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    backgroundColor:"grey"
  }
})


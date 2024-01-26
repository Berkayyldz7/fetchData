import {Text,View,StyleSheet} from "react-native"
import {useState, useEffect} from "react"

import {useSelector, useDispatch} from "react-redux"

import {setClicked} from "../src/store/productSlice"
import ReactDom from "react-dom"


const Product = () => {

  const {clicked} = useSelector((state)=>state.user)

  // redux ile statelerin kullanılması.

  const dispatch = useDispatch()


  // const [clicked, setClicked] = useState(false)
  const [data,setData] = useState({})
  const [productSelectNumber, setProductSelectNumber] = useState(14)

  useEffect( ()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${productSelectNumber}`)
  .then((response) => response.json())
  .then((json) => setData(json));
  }, [] )

  
  return(
    <View style={styles.main}>

      <Text>Ürünler</Text>

              {clicked ? <View>
          <Text> ürün bilgisi: {data.title}  ürün numarası:{data.userId} </Text>
        </View>: null}

    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  main : {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1
  }
})
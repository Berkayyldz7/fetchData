import {SafeAreaView, View, Text, Pressable} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import {Provider} from "react-redux"
import {store} from "./src/store/store"

import Product from "./components/Product"
import GetProduct from "./components/GetProduct"


const Stack = createNativeStackNavigator()

const App = () => {
  return(

    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="GetProduct" component={GetProduct}/>
          <Stack.Screen name="Product" component={Product}/>

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

export default App
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import {createStackNavigator} from "@react-navigation/stack"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/Register"
import {firebaseConfig} from "./config";
import * as firebase from "firebase"

if (!firebase.apps.lenght){
firebase.initializeApp(firebaseConfig);
}
 else {
  firebase.app();
 }


 const Stack = createStackNavigator()
const StackNav = ()=>{
  return (
    <Stack.Navigator initialRootName="Login" screenOptions= {{headerShown:false,gestureEnabled:false}}>
    
     <Stack.Screen name="Login" componment = {LoginScreen}/>
     <Stack.Screen name="Register" componment = {RegisterScreen}/>
     <Stack.Screen name="Feed" componment = {DrawerNavigator}/>



      </Stack.Navigator>
  )
}
 export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
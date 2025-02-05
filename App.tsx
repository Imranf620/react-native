import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  useColorScheme,
  Button
} from "react-native";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(useColorScheme() === "light");

  const toggleLightMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };
  const getData  = async()=>{
    const res = fetch('https://dummyjson.com/products').then(res=>res.json()).then(data=>console.log(data))
  }
  getData()

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: isLightMode ? "white" : "black" }}>
        <Text style={{ color: isLightMode ? "black" : "white" }}>
          Hello, World!
        </Text>
      </View>
      <Button
        onPress={toggleLightMode} 
        title={`${isLightMode ? "Dark" : "Light"}`}
      />
    </SafeAreaView>
  );
};

export default App;

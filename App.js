import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./navi/StackNav";

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}

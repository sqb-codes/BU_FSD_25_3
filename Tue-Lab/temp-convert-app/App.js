import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import { styles } from './App.styles';
import tempBg from "./assets/temp-bg.jpg";
import { Input } from './components/Input';
import { useState } from 'react';
import { DisplayTemp } from './components/DisplayTemp';
import { ConvertButton } from './components/ConvertButton';
import { UNITS, 
  getOppositeUnit, 
  convertTempTo } from './components/temperature';

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const oppositeUnit = getOppositeUnit(currentUnit);

  function getConvertedTemp() {
    if(isNaN(inputValue)) {
      return "";
    } else {
      return convertTempTo(inputValue, oppositeUnit).toFixed(1);
    }
  }

  return (
    <ImageBackground style={styles.bgImg} source={tempBg}>
      <SafeAreaView style={styles.container}>
        <View style={styles.workspace}>
          <DisplayTemp 
            unit={oppositeUnit}
            temp={getConvertedTemp()}
          />
          
          <Input 
            defaultValue={0} 
            unit={currentUnit}
            onChange={setInputValue}
          />
          <ConvertButton 
            onPress={() => {
              setCurrentUnit(oppositeUnit)
            }}
            unit={currentUnit}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}



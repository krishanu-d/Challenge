import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

const NumberPicker = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const numbers = Array.from({length: 20}, (_, i) => i + 1);

  const handleNumberSelection = (number: number) => {
    setSelectedNumber(number);
  };

  return (
    <View style={{height: 200, width: '100%'}}>
      <ScrollPicker
        dataSource={numbers}
        selectedIndex={1}
        renderItem={(data, index) => {
          return (
            <>
              <Text>{data}</Text>
            </>
          );
          //
        }}
        onValueChange={(data, selectedIndex) => {
          handleNumberSelection(data);
          //
        }}
        wrapperHeight={200}
        wrapperBackground="#FFFFFF"
        itemHeight={36}
        highlightColor="rgba(98, 49, 173,0.1)"
        highlightBorderWidth={1}
        itemTextStyle={{fontFamily: 'Montserrat-SemiBold', fontSize: 24, color: '#333'}}
        activeItemTextStyle={{fontFamily: 'Montserrat-SemiBold', fontSize: 24, color: '#333'}}
      />
    </View>
  );
};

export default NumberPicker;

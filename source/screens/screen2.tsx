import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {Images} from '../Asset/asset';
import FastImage from 'react-native-fast-image';
import TabComponent from './TabComponent';

export default function Screen2(): JSX.Element {
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={style.container}>
        <View style={{padding: 16}}>
          {/* header */}
          <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30}}>
            <FastImage source={Images.logo} style={{width: 30, height: 30}} />
            <Text style={{color: '#727682', fontSize: 14, fontFamily: 'Montserrat-Medium'}}>Profile</Text>
            <View>
              <FastImage source={Images.comment} style={{width: 24, height: 24}} />
              <View
                style={{
                  backgroundColor: '#6231ad',
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  position: 'absolute',
                  top: -8,
                  right: -5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontFamily: 'Helvetica', fontSize: 11, color: '#fff'}}>1</Text>
              </View>
            </View>
          </View>

          <View style={{width: '100%', alignItems: 'center', marginBottom: 44}}>
            <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center', marginBottom: 12}}>
              <View>
                <FastImage source={Images.dp} style={{width: 75, height: 75, borderRadius: 40}} />
                <FastImage source={Images.edit} style={{width: 24, height: 24, position: 'absolute', bottom: 0, right: 0}} />
              </View>
            </View>
            <Text style={{color: '#333', fontFamily: 'Montserrat-Medium', fontSize: 14, marginBottom:8}}>Jina Simons</Text>
            <Text style={{color: '#727682', fontFamily: 'Montserrat_Medium', fontSize: 12, marginBottom: 8}}>6000 Pts</Text>
            <Text style={{color: '#727682', fontFamily: 'Montserrat_Medium', fontSize: 14, lineHeight: 20, marginBottom: 20}}>I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!</Text>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
              <FastImage source={Images.logout} style={{width: 18, height: 14}} />
              <Text style={{color: '#727682', fontFamily: 'Montserrat_Medium', fontSize: 14, paddingLeft: 9, lineHeight: 14}}>Logout</Text>
            </TouchableOpacity>
          </View>

          <View style={{width: '100%', borderRadius: 5, borderWidth: 1, borderColor: '#eeeaf3', flexDirection: 'row', justifyContent: 'space-between', padding: 20, marginBottom: 28}}>
            <FastImage source={Images.star} style={{width: 27, height: 31, position: 'absolute', top: -15, left: '50%'}} />

            <View>
              <Text style={{color: '#727682', fontFamily: 'Montserrat-SemiBold', fontSize: 14, marginBottom: 14}}> Under or Over</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FastImage source={Images.inc} style={{width: 32, height: 32}} />
                <Text style={{color: '#4f4f4f', fontFamily: 'Montserrat-Bold', fontSize: 24, paddingLeft: 12}}>81%</Text>
              </View>
            </View>

            <View>
              <Text style={{color: '#727682', fontFamily: 'Montserrat-SemiBold', fontSize: 14, marginBottom: 14}}> Top 5</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FastImage source={Images.dec} style={{width: 32, height: 32}} />
                <Text style={{color: '#4f4f4f', fontFamily: 'Montserrat-Bold', fontSize: 24, paddingLeft: 12}}>-51%</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{backgroundColor: '#eeeaf3', height: 4}}></View>

        <TabComponent />
        {/* <BadgeComponent /> */}
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});

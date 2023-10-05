import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Modal, Dimensions} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {Images} from '../Asset/asset';
import * as Progress from 'react-native-progress';
import {BlurView} from '@react-native-community/blur';
import NumberPicker from './NumberPicker';

export default function Screen1(props: any): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
const screenHeight = Dimensions.get('screen').height


  return (
    <View style={style.container}>
      <Text style={style.heading}>Today's Game</Text>

      <View style={style.card}>
        <ImageBackground source={Images.bg} style={{width: 'auto', height: 118, padding: 16, paddingLeft: 15, justifyContent: 'space-between'}} resizeMode={'contain'}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 12, color: '#d2baf5', fontFamily: 'Montserrat-Bold', paddingRight: 8}}>UNDER OR OVER</Text>
              <FastImage source={Images.info} style={{width: 13, height: 13}} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 12, color: '#b296dc', fontFamily: 'Montserrat-Regular', paddingRight: 8}}>Starting in</Text>
              <FastImage source={Images.clock} style={{width: 14, height: 14}} />
              <Text style={{fontSize: 14, color: '#d2baf5', fontFamily: 'Montserrat-Regular', paddingLeft: 8}}>03:23:12</Text>
            </View>
          </View>
          <View style={{paddingTop: 16}}>
            <Text style={{fontFamily: 'Montserrat-Regular', color: '#d2baf5', fontSize: 14, lineHeight: 19}}>Bitcoin price will be under</Text>
            <Text style={{fontFamily: 'Montserrat-Regular', color: '#fff', fontSize: 14, lineHeight: 19}}>
              <Text style={{fontFamily: 'Montserrat-Bold'}}>$24,524 </Text>at 7 a ET on 22nd Jan'21
            </Text>
          </View>
        </ImageBackground>

        <View style={{alignItems: 'center', padding: 16}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 22}}>
            <View>
              <Text style={{color: '#B5C0C8', fontFamily: 'Montserrat-Medium', fontSize: 12, marginBottom: 8}}>PRIZE POOL</Text>
              <Text style={{color: '#333', fontFamily: 'AvenirNextLTPro-Bold', fontSize: 14}}>$12,000</Text>
            </View>

            <View>
              <Text style={{color: '#B5C0C8', fontFamily: 'Montserrat-Medium', fontSize: 12, marginBottom: 8}}>UNDER</Text>
              <Text style={{color: '#333', fontFamily: 'AvenirNextLTPro-Bold', fontSize: 14}}>3.25x</Text>
            </View>

            <View>
              <Text style={{color: '#B5C0C8', fontFamily: 'Montserrat-Medium', fontSize: 12, marginBottom: 8}}>OVER</Text>
              <Text style={{color: '#333', fontFamily: 'AvenirNextLTPro-Bold', fontSize: 14}}>1.25x</Text>
            </View>

            <View>
              <Text style={{color: '#B5C0C8', fontFamily: 'Montserrat-Medium', fontSize: 12, marginBottom: 8}}>ENTERY FEES</Text>
              <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={{color: '#333', fontFamily: 'AvenirNextLTPro-Bold', fontSize: 14, paddingRight: 8}}>5</Text>
                <FastImage source={Images.coin} style={{width: 13, height: 13}} />
              </View>
            </View>
          </View>

          <Text style={{width: '100%', color: '#727682', fontSize: 14, fontFamily: 'Montserrat-SemiBold', marginBottom: 14}}>What's your prediction?</Text>

          {/* BUTTONS */}
          <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={{backgroundColor: '#452c55', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 30, width: 147, height: 40}}>
              <FastImage source={Images.arrow} style={{width: 11.5, height: 11}} />
              <Text style={{color: '#fff', fontSize: 14, fontFamily: 'Montserrat-SemiBold', marginLeft: 4}}>Under</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{backgroundColor: '#6231ad', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 30, width: 147, height: 40}}
              onPress={() => {
                // props.navigation.navigate('BottomTabs', {screen: 'Screen2'});
                setModalVisible(true);
              }}>
              <FastImage source={Images.arrow} style={{width: 11.5, height: 11, transform: 'rotate(180deg)'}} />
              <Text style={{color: '#fff', fontSize: 14, fontFamily: 'Montserrat-SemiBold', marginLeft: 4}}>Over</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{width: '100%', backgroundColor: '#f6f3fa', padding: 15}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FastImage source={Images.person} style={{width: 12, height: 12}} />
              <Text style={{color: '#727682', fontFamily: 'Montserrat-SemiBold', fontSize: 14, marginLeft: 8.3}}> 355 Players</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FastImage source={Images.chart} style={{width: 16, height: 13}} resizeMode={'contain'} />
              <Text style={{color: '#727682', fontFamily: 'Montserrat-SemiBold', fontSize: 14, marginLeft: 8.3}}>View chart</Text>
            </View>
          </View>

          <Progress.Bar progress={0.75} width={null} height={10} color="#fe4190" unfilledColor="#2DABAD" borderWidth={0} />

          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 12, marginBottom: 8}}>
            <Text style={{color: '#B5C0C8', fontFamily: 'Montserrat-Medium', fontSize: 12}}> 232 predicted under</Text>

            <Text style={{color: '#B5C0C8', fontFamily: 'Montserrat-Medium', fontSize: 12}}>123 predicted over</Text>
          </View>
        </View>
      </View>

      {modalVisible && <BlurView style={style.absolute} blurType="dark" blurAmount={1} reducedTransparencyFallbackColor="white" />}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <View style={{width: '100%', bottom: 0, padding: 16, borderTopRightRadius: 20, borderTopLeftRadius: 20, backgroundColor: '#fff',height:screenHeight/2 }}>
            <View style={{backgroundColor: '#b5c0c8', width: 30, height: 4, alignSelf: 'center', marginBottom: 28, borderRadius: 36}}></View>
            <Text style={{color: '#333', fontFamily: 'Montserrat-SemiBold', fontSize: 16, marginBottom: 28}}>Your Prediction is Under</Text>
            <Text style={{color: '#727682', fontFamily: 'Montserrat-SemiBold', fontSize: 12}}>ENTRY TICKET</Text>

            <NumberPicker />

            <Text style={{color: '#b5c0c8', fontFamily: 'Montserrat-Medium', fontSize: 12}}>You Can Win</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 28}}>
              <Text style={{color: '#03a67f', fontFamily: 'Montserrat-SemiBold', fontSize: 14}}>$2000</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: '#727682', fontFamily: 'Montserrat-Medium', fontSize: 12, paddingRight: 8}}>Total</Text>
                <FastImage source={Images.coin} style={{width: 13, height: 13}} />
                <Text style={{color: '#333', fontFamily: 'Montserrat-SemiBold', fontSize: 14, paddingLeft: 8}}>5</Text>
              </View>
            </View>
            <TouchableOpacity
              style={{backgroundColor: '#6231ad', borderRadius: 33, padding: 12, justifyContent: 'center', alignItems: 'center'}}
              onPress={() => {
                setModalVisible(false);
                props.navigation.navigate('BottomTabs', {screen: 'Screen2'});
              }}>
              <Text style={{color: '#fff', fontFamily: 'Montserrat-SemiBold', fontSize: 14}}>Submit my prediction</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 13,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 16,
    color: '#333',
    fontStyle: 'normal',
    fontFamily: 'AvenirNextLTPro-Bold',
    marginBottom: 17,
  },
  card: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#eeeaf3',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

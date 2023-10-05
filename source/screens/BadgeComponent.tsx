import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Images} from '../Asset/asset';
import FastImage from 'react-native-fast-image';

export default function BadgeComponent(): JSX.Element {
  const list = [
    {
      pic: Images.pic,
      name: 'First Stripe Earned',
      desc: 'Top 10% of highest spending players in a month',
      bonus: 'x 3',
    },
    {
      pic: Images.pic,
      name: 'Born Winner',
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      pic: Images.pic,
      name: 'Trader of the Month',
      desc: 'Won 7 under-over games in a row',
      bonus: 'x 3',
    },
    {
      pic: Images.pic,
      name: 'Rising Star',
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      pic: Images.pic,
      name: 'Jackpot',
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      pic: Images.pic,
      name: 'Impossible',
      desc: 'Top 10% of highest spending players in a month',
    },
  ];

  

  return (

    <>
      {list.map((item, index) => {
        return(
            <View key={item.name} style={{backgroundColor: '#fff', borderRadius: 5, borderWidth: 1, borderColor: '#EEEAF3', width: '100%', flexDirection:'row', padding:16, paddingTop:20, marginBottom:16}}>
            {/* <View style={{}}> */}
            <FastImage source={item.pic} style={{width: 60, height: 60}} />
            <View style={{paddingLeft:16}}>
              <Text style={{color:'#333', fontFamily:'Montserrat-SemiBold', fontSize:14, marginBottom:8}}>{item.name} {item.bonus && <Text style={{color:'#ffa600'}}>{item.bonus}</Text>}
              </Text>
              <Text style={{color:'#333', fontFamily:'Montserrat-Medium', fontSize:14, lineHeight:20, width:'80%'}}>{item.desc}</Text>
            </View>
          </View>
        )
      })}
    </>
 
  );
}

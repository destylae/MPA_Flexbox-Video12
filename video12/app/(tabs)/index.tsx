import React from 'react';
import { Text, View, Image } from 'react-native';

const MateriFlexBox = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#c8d6e5',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ backgroundColor: '#ee5253', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#feca57', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#1dd1a1', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#5f27cd', width: 50, height: 50 }} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image 
          source={{
            uri: 
              'https://cdni.iconscout.com/illustration/premium/thumb/female-barista-making-coffee-8397906-6715520.png'
          }}
          style={{width: 150, height: 100, borderRadius: 50, marginRight: 14}} 
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Desty Laela
          </Text>
          <Text>Barista Teh Kita</Text>            
        </View>
      </View>
    </View>
  );
}

export default MateriFlexBox;
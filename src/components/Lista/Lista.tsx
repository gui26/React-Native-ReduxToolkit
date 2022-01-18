import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addUser,deleteUser,updateUsername , cruddlistdata} from './../../store/CrudSlice'
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList
} from 'react-native';

import { styles } from './styles';


export function Lista(){


  const { value } = useSelector(cruddlistdata)
  const dispatch = useDispatch();
  

  return (
    <View style={styles.container}>
      <FlatList 
      data={value}
      keyExtractor={ (item)=>item.id}
      renderItem={({ item }) =>(


        <View style={{ marginVertical: 10}}>
          <Text>{item.name}</Text>
          <Text>{item.lastname}</Text>
          <Button title='Remove' onPress={()=>dispatch(deleteUser({ id: item.id}))}/>
        </View>

      )}/>

    </View>
  );
}
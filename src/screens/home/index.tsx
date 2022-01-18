import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addUser,deleteUser,updateUsername , cruddlistdata} from './../../store/CrudSlice'
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import { styles } from './styles';
import { Lista } from '../../components/Lista/Lista';

export function home(){
  const[name, setName]=useState('');
  const[lastname, setLastname] = useState('');
  

  const { value } = useSelector(cruddlistdata)
  const dispatch = useDispatch();
  console.log(name);


  


  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <TextInput placeholder='name' onChangeText={(text) => setName(text)}/>
      <TextInput placeholder='lastname' onChangeText={(text) => setLastname(text)}/>

      <Button 
      title='adicionar' 
      onPress={()=> dispatch(addUser({ id: value[value.length - 1].id +1 , name, lastname}))}/>

        <Lista/>
    </View>

    
  );
}
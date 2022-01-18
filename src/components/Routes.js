import{NavigationContainer} from '@react-navigation/native';
import{createNativeStackNavigator} from '@react-navigation/native-stack';
import { home } from '../screens/home';

const Stack = createNativeStackNavigator();

export const Routes = ()=>{
    return(
        <NavigationContainer>
                 <Stack.Navigator initialRouteName='home'>
                    <Stack.Screen  name='home' component={home} 
                    options={{
                          title: 'home',
                          headerShown: true     
                    }}/>
                 </Stack.Navigator>
        </NavigationContainer>
    )

}
export default Routes;
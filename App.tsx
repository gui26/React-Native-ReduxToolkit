import { StatusBar } from 'expo-status-bar';
import Routes from './src/components/Routes';
import{Provider} from 'react-redux';
import Store from './src/store/store'


export default function App() {
  return (
    <>
      
      <StatusBar style="auto" />
      <Provider store={Store}>
            <Routes/>
      </Provider>
     
    </>
  );
};
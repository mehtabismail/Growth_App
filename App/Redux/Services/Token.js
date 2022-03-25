import AsyncStorage from '@react-native-async-storage/async-storage';

const Token = {
     auth_token : AsyncStorage.getItem('session_token'),
}

export default Token;
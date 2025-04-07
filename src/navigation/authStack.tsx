import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/Auth/register/RegisterScreen';
import LoginScreen from '../screens/Auth/login/LoginScreen';


const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

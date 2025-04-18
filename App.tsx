import 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import { StyleSheet } from 'react-native';
import CustomToast from './src/components/CustomToast';
import { useEffect } from 'react';
import { useUserStore } from './src/store/context/userStore';


export default function App() {

  useEffect(() => {
    const unsubscribe = useUserStore.getState().initAuth();
    return unsubscribe;
  }, []);


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <RootNavigator />
        <CustomToast />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

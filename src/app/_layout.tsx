import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Accueil'}} />
        <Stack.Screen name="loading" options={{ title: 'Chargement'}}/>
        <Stack.Screen name="list" options={{ title: 'Liste'}}/>
        <Stack.Screen name="setting" options={{ title: 'Paramètre'}}/>
        <Stack.Screen name="store" options={{ title: 'Magasins'}}/>
        <Stack.Screen name="category" options={{ title: 'Catégorie'}}/>
        <Stack.Screen name="product" options={{ title: 'Produits'}}/>
         
      </Stack>
    </ThemeProvider>
  );
}

import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'white', dark: 'white' }}
      headerImage={
        <Image
          source={require('@/assets/images/ely_bry.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bonjour!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Nom: BIKIE BOUBENGA</ThemedText>
         <ThemedText type="subtitle">Prénom: Elysée Brinah Fah</ThemedText>
          <ThemedText type="subtitle">Date de naissance: 04/02/2003</ThemedText>
           <ThemedText type="subtitle">Nationalité: Gabonaise</ThemedText>
           <ThemedText type="subtitle">Ville de naissance: Libreville</ThemedText>
           <ThemedText type="subtitle">Civil: Célibataire</ThemedText>
           <ThemedText type="subtitle">Statut: Etudiante</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: '',
              android: '',
              web: '',
            })}
          </ThemedText>{' '}
         
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
          {``}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
          {` `}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 188,
    width: 300,
    top: 50,
    left: 50,
    position: 'relative',
  },
});

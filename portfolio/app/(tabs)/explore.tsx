
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'white', dark: 'white' }}
      headerImage={
        <IconSymbol
          size={310}
          color="white"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Parcours</ThemedText>
      </ThemedView>
      <ThemedText>Parcours scolaire</ThemedText>
      <Collapsible title="">
        <ThemedText>
         {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText>{' '}
        </ThemedText>
       
      </Collapsible>
      <Collapsible title="">
        <ThemedText>
         {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
        </ThemedText>
      </Collapsible>
      <Collapsible title="">
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText> and{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        
        </ThemedText>
        
      </Collapsible>
      <Collapsible title="">
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
           
          </ThemedText>
        </ThemedText>
    
      </Collapsible>
      <Collapsible title="">
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> 
        </ThemedText>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title"></ThemedText>
        </ThemedView>
     
      </Collapsible>
      <Collapsible title="">
        <ThemedText>
         {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
           <ThemedText type="defaultSemiBold"></ThemedText>{' '}
        
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              <ThemedText type="defaultSemiBold"></ThemedText>{' '}
             
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

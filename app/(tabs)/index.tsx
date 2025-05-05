import ReceiptItemView from '@/components/custom/ReceiptItemView';
import { useBillSplitContext } from '@/utils/context';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const { receiptItems, people } = useBillSplitContext();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={receiptItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ReceiptItemView item={item} />}
        />
        {/* Render a list of ReceiptItemViews for each person.items */}
        {people.map((person) => (
          <FlatList
            key={person.id}
            data={person.items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ReceiptItemView item={item} />}
          />
        ))}

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  cameraContainer: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10,
    margin: 16,
  },
  camera: {
    flex: 1,
  },
  controlsContainer: {
    padding: 20,
    alignItems: 'center',
  },
  captureButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 15,
  },
  captureButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  demoButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  demoButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomeScreen;

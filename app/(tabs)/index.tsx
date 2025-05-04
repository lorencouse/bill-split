import PersonBubble from '@/components/custom/PersonBubble';
import ReceiptItemView from '@/components/custom/ReceiptItemView';
import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [selectedItem, setSelectedItem] = React.useState<string>(null);
  const SAMPLE_RECEIPT_ITEMS = [
    {
      id: '1',
      name: 'Chicken Pasta',
      quantity: 1,
      price: 15.99,
      assignedTo: null,
    },
    {
      id: '2',
      name: 'Garden Salad',
      quantity: 1,
      price: 8.5,
      assignedTo: null,
    },
    {
      id: '3',
      name: 'Garlic Bread',
      quantity: 1,
      price: 5.99,
      assignedTo: null,
    },
    {
      id: '4',
      name: 'Margherita Pizza',
      quantity: 1,
      price: 12.99,
      assignedTo: null,
    },
    { id: '5', name: 'Tiramisu', quantity: 1, price: 7.5, assignedTo: null },
    { id: '6', name: 'Iced Tea', quantity: 1, price: 3.49, assignedTo: null },
    { id: '7', name: 'Cappuccino', quantity: 1, price: 4.25, assignedTo: null },
    {
      id: '8',
      name: 'Bottled Water',
      quantity: 1,
      price: 2.5,
      assignedTo: null,
    },
  ];

  const people = [
    { id: '1', name: 'Alice', items: [] },
    { id: '2', name: 'Bob', items: [] },
    { id: '3', name: 'Charlie', items: [] },
    { id: '4', name: 'David', items: [] },
    { id: '5', name: 'Eve', items: [] },
  ];


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingVertical: 10 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        >
          {people.map((person) => {
            return <PersonBubble person={person} key={person.id} />;
          })}
        </ScrollView>
      </View>
      <View style={styles.container}>
        <FlatList
          data={SAMPLE_RECEIPT_ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ReceiptItemView
              item={item}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          )}
        />
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

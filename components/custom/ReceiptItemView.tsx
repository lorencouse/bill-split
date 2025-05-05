import { ReceiptItem } from '@/types';
import { personColors } from '@/utils/constants';
import { useBillSplitContext } from '@/utils/context';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PersonBubbleList from './PersonBubbleList';

type ReceiptItemProps = {
  item: ReceiptItem;
};

const ReceiptItemView = ({ item }: ReceiptItemProps) => {
  const { people, selectedItem, setSelectedItem } = useBillSplitContext();
  const getStatusColor = () => {
    return item.assignedTo ? personColors[item.assignedTo - 1] : '#333';
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.container, { borderLeftColor: getStatusColor() }]}
        onPress={() => setSelectedItem(item.id)}
      >
        <View style={styles.info}>
          <Text style={styles.name}>
            {item.name} {item.id === selectedItem ? 'Selected' : ''}
          </Text>
          <Text style={styles.price}>
            ${item.price.toFixed(2)} x {item.quantity}
          </Text>
        </View>
        <View style={styles.assignmentContainer}>
          {item.assignedTo ? (
            <Text style={styles.assignedText}>{item.assignedTo}</Text>
          ) : (
            <Text style={styles.unassignedText}>Tap to assign</Text>
          )}
        </View>
      </TouchableOpacity>
      {selectedItem === item.id && (
        <PersonBubbleList people={people} itemID={item.id} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 8,
    borderLeftWidth: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  assignmentContainer: {
    marginLeft: 8,
  },
  assignedText: {
    color: '#4CAF50',
    fontWeight: '500',
  },
  unassignedText: {
    color: '#FFC107',
    fontStyle: 'italic',
  },
});

export default ReceiptItemView;

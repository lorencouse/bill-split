import { Person } from '@/types';
import { personColors } from '@/utils/constants';
import { useBillSplitContext } from '@/utils/context';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const PersonBubble = ({
  person,
  itemID,
}: {
  person: Person;
  itemID: string;
}) => {
  const items = person.items || [];
  const itemCount = items.length;
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const { setReceiptItems, receiptItems } = useBillSplitContext();

  return (
    <View
      key={person.id}
      style={[
        styles.personPill,
        {
          borderColor: personColors[parseInt(person.id, 10) - 1] || '#e3e3e3',
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          const updatedItems = receiptItems.map((item) => {
            if (item.id === itemID) {
              return {
                ...item,
                assignedTo: person.id,
              };
            }
            return item;
          });
          setReceiptItems(updatedItems);
        }}
        style={{ flex: 1, alignItems: 'center' }}
      >
        <Text style={styles.personName}>{person.name}</Text>
        <Text style={styles.personStats}>{itemCount} items</Text>
        <Text style={styles.personStats}>${total.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
};

const PersonBubbleList = ({
  people,
  itemID,
}: {
  people: Person[];
  itemID: string;
}) => {
  return (
    <View style={{ paddingVertical: 10 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {people.map((person) => {
          return (
            <PersonBubble person={person} itemID={itemID} key={person.id} />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  personPill: {
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e3e3e3',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
    minWidth: 80,
  },
  personName: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },
  personStats: {
    fontSize: 12,
  },
});

export default PersonBubbleList;

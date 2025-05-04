import { Person } from '@/types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PersonBubble = ({ person }: { person: Person }) => {
  const personColors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'];

  const items = person.items || [];
  const itemCount = items.length;
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
      <Text style={styles.personName}>{person.name}</Text>
      <Text style={styles.personStats}>{itemCount} items</Text>
      <Text style={styles.personStats}>${total.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  personPill: {
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e3e3e3',
    borderRadius: 20,
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

export default PersonBubble;

import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const PersonSelector = ({ people, onSelectPerson, onCancel }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select Person</Text>

      <FlatList
        data={people}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item: personName }) => (
          <TouchableOpacity
            style={styles.personItem}
            onPress={() => onSelectPerson(personName)}
          >
            <Text style={styles.personName}>{personName}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  personItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  personName: {
    fontSize: 16,
    fontWeight: '500',
  },
  cancelButton: {
    margin: 16,
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cancelButtonText: {
    color: '#666',
    fontWeight: '500',
  },
});

export default PersonSelector;

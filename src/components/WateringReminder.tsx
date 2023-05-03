import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

interface WateringReminderProps {
  isEnabled: boolean;
  toggleSwitch: () => void;
}

const WateringReminder: React.FC<WateringReminderProps> = ({ isEnabled, toggleSwitch }) => {
  return (
    <View style={styles.reminderContainer}>
      <Text style={styles.reminderText}>Watering Reminder:</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  reminderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  reminderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
});

export default WateringReminder;


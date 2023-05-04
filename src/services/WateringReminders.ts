import { Plant } from '../store/types';

// Replace these with actual API calls in a real-world app
const API_BASE = 'https://api.example.com';

export const fetchWateringReminders = async (): Promise<Plant[]> => {
  const response = await fetch(`${API_BASE}/watering-reminders`);
  const data = await response.json();
  return data;
};

export const createWateringReminder = async (plantId: string, reminderDate: Date): Promise<void> => {
  await fetch(`${API_BASE}/watering-reminders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ plantId, reminderDate }),
  });
};

export const deleteWateringReminder = async (plantId: string): Promise<void> => {
  await fetch(`${API_BASE}/watering-reminders/${plantId}`, {
    method: 'DELETE',
  });
};

import { Plant } from '../store/types';

// This is a mock for fetching plants data.
// In a real-world app, you would replace this with calls to an API to fetch the actual data.
const mockPlants: Plant[] = [
  {
    id: '1',
    name: 'Monstera',
    category: 'Indoor',
    imageUrl: 'https://example.com/monstera.jpg',
    images: [
      'https://example.com/monstera1.jpg',
      'https://example.com/monstera2.jpg',
      'https://example.com/monstera3.jpg',
    ],
    wateringFrequency: 'Every 7 days',
    dailyCare: 'Keep in a well-lit room, away from direct sunlight.',
  },
  // Add more mock plants as needed
];

export const fetchPlants = async (): Promise<Plant[]> => {
  return mockPlants;
};

export const fetchPlantById = async (id: string): Promise<Plant | null> => {
  return mockPlants.find((plant) => plant.id === id) || null;
};

export const createPlant = async (plant: Plant): Promise<Plant> => {
  // In a real-world app, you would call an API to create a new plant.
  // For now, we'll just return the provided plant.
  return plant;
};

export const updatePlant = async (id: string, updates: Partial<Plant>): Promise<Plant | null> => {
  // In a real-world app, you would call an API to update the plant.
  // For now, we'll just return the updated plant.
  const plant = mockPlants.find((plant) => plant.id === id);
  if (plant) {
    return { ...plant, ...updates };
  }
  return null;
};

// import { Plant } from '../store/types';

// // Replace these with actual API calls in a real-world app
// const API_BASE = 'https://api.example.com';

// export const fetchPlants = async (): Promise<Plant[]> => {
//   const response = await fetch(`${API_BASE}/plants`);
//   const data = await response.json();
//   return data;
// };

// export const fetchPlantById = async (id: string): Promise<Plant | null> => {
//   const response = await fetch(`${API_BASE}/plants/${id}`);
//   const data = await response.json();
//   return data;
// };

// export const createPlant = async (plant: Plant): Promise<Plant> => {
//   const response = await fetch(`${API_BASE}/plants`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(plant),
//   });
//   const data = await response.json();
//   return data;
// };

// export const updatePlant = async (id: string, updates: Partial<Plant>): Promise<Plant | null> => {
//   const response = await fetch(`${API_BASE}/plants/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updates),
//   });
//   const data = await response.json();
//   return data;
// };

// export const deletePlant = async (id: string): Promise<void> => {
//   await fetch(`${API_BASE}/plants/${id}`, {
//     method: 'DELETE',
//   });
// };

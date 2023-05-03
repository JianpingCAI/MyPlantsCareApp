// Replace these with actual API calls in a real-world app
const API_BASE = 'https://api.example.com';

export const fetchCategories = async (): Promise<string[]> => {
  const response = await fetch(`${API_BASE}/categories`);
  const data = await response.json();
  return data;
};

import AsyncStorage from '@react-native-async-storage/async-storage';

export const createUser = async (email: string, password: string) => {
  // This is a simple mock for user authentication. In a real-world app, this should call an API to create a new user.
  await AsyncStorage.setItem('@auth:email', email);
  await AsyncStorage.setItem('@auth:password', password);
};

export const loginUser = async (email: string, password: string) => {
  // This is a simple mock for user authentication. In a real-world app, this should call an API to authenticate the user.
  const storedEmail = await AsyncStorage.getItem('@auth:email');
  const storedPassword = await AsyncStorage.getItem('@auth:password');

  // if (email !== storedEmail || password !== storedPassword) {
  //   throw new Error('Invalid email or password');
  // }
};

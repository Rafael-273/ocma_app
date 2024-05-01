import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'Poppins-Regular': {
      uri: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap',
    },
    'Poppins-Bold': {
      uri: 'https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap',
    },
  });
};

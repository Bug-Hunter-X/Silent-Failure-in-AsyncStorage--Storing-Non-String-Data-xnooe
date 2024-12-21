The solution involves stringifying the object before storing it in `AsyncStorage` and parsing the retrieved string back into an object.  This ensures that only string data is handled by `AsyncStorage`.

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const myObject = { name: 'John Doe', age: 30 };

const storeData = async () => {
  try {
    const jsonValue = JSON.stringify(myObject);
    await AsyncStorage.setItem('@myObject', jsonValue); // Correct: store stringified object
    console.log('Object stored successfully!');
  } catch (e) {
    console.log('Failed to store object:', e);
  }
};

const retrieveData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@myObject');
    const value = jsonValue != null ? JSON.parse(jsonValue) : null;
    console.log('Retrieved value:', value); // Now retrieves the object
  } catch (e) {
    console.log('Failed to retrieve object:', e);
  }
};

storeData();
retrieveData();
```
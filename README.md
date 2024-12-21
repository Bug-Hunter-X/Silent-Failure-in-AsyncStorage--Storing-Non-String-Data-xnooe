# Silent Failure in AsyncStorage: Storing Non-String Data

This repository demonstrates a subtle bug in React Native applications involving the `AsyncStorage` API.  When attempting to directly store non-string data (like objects or arrays) into `AsyncStorage`, the operation fails silently without throwing an error.  This makes debugging particularly difficult, as the application appears to function normally, but the stored data is inaccessible.

The `bug.js` file illustrates this issue, showcasing how attempting to store an object results in `null` being returned when retrieving the data.  The `bugSolution.js` file demonstrates the correct approach: stringifying the object before storage and parsing it after retrieval.

This is a common pitfall for developers unfamiliar with `AsyncStorage`'s limitations.
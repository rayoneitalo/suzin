import firebase, { firestore } from './index';

// Create User on cloud firestore
export const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  additionalData?: any
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
};

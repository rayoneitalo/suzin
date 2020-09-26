import app from '../config/firebase';

const saveProduct = (object: any) => {
  if (object.product.file !== null) {
    const objectFile = object.product.file[0];
    const storageRef = app.storage().ref(`images/${objectFile.name}`);

    try {
      storageRef.put(objectFile).then(async snapshot => {
        const dowloadURL = await snapshot.ref.getDownloadURL();
        console.log(dowloadURL);
      });
    } catch (error) {
      console.log('Message:' + error);
    }
  } else {
    console.log('Empty file.');
  }
  const db = app.firestore();
  db.collection('product').add({
    name: object.product.name,
    price: object.product.price,
    weight: object.product.weight,
    ingredients: object.product.ingredients,
    pathImage: '',
  });
};

export { saveProduct };

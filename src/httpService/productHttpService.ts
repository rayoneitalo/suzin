import app from '../firebase';

const saveProduct = (object: any) => {
  if (object.product.file !== null) {
    const objectFile = object.product.file[0];
    const storageRef = app.storage().ref(`images/${objectFile.name}`);
    storageRef.put(objectFile).then(snapshot => {
      console.log('Upload or file');
    });
  } else {
    console.log('Empty file.');
  }
  // const filesRef = storageRef.child('file');
};

export { saveProduct };

import firebase from 'firebase';

const getRefDatabase = (path: Array<string>): firebase.database.Reference => {
  let refDataBase = firebase.database().ref(path[0]);
  for (let i = 1; i < path.length; i++) {
    refDataBase = refDataBase.child(path[i]);
  }
  return refDataBase;
};

export default getRefDatabase;

import React,{useEffect,useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import SearchingPage from './searchingPage';
import axios from 'axios';

// const userDoc = firestore().collection('trip').doc('cS0CUHz82jKWFnX0T723');
// console.log(userDoc);


// const [trips, settrips] = useState([]);
// let allTrips = [];
//   // await 
//        firestore()
//        .collection('trip')
//        .onSnapshot(querySnapshot => {
//          const trips = [];
 
//          querySnapshot.forEach(documentSnapshot => {
//           trips.push({
//             ...documentSnapshot.data(),
//             docId: documentSnapshot.id,
//           });
//          });
//          setState ? setState(trips) : null;
//          allTrips = trips;
//        });


// firestore()
//   .collection('sample_test')
//   .doc('ABC2')
//   .set({
//     name: 'Tarun',
//     age: '22',
//   })
//   .then(() => {
//     console.log('User added!');
//   });
// console.log('p1');
// const subscriber = firestore()
  // .collection('user')
  // .doc('+911234567890')
  // .onSnapshot(documentSnapshot => {
    // console.log('User data: ', documentSnapshot.data());
  // });
// console.log('p2');
// console.log(subscriber);
// console.log('p3');
function getFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach(key => formData.append(key, object[key]));
  return formData;
}

const justDoIt=async()=>{
  await firestore()
  .collection('trip')
  .doc('FtIkdCJxKH5IXo4Gk3XW')
  .onSnapshot(documentSnapshot => {
    console.log('Mysore data: ', documentSnapshot.data());
  });
  console.log("done");
 }
const Separator = () => <View style={styles.separator} />;

const App = () =>
(
  <SafeAreaView style={styles.container}>
    {/* <searchingPage/> */}
    {/* </search> */}
    {/* return (<SearchingPage/>) */}
    <View>
      <Text style={styles.title}>Hellooo</Text>
      <Button
        title="Press me"
        // onPress={() => Alert.alert('Simple Button pressed')}
        // onPress={SearchingPage}
        onPress={justDoIt}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;

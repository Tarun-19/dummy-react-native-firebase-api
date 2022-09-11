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

const App = () =>{
  let flag=0;

  const [tripsState, settripsState] = useState([]);
  const [cards, setcards] = useState([]);
useEffect(() => {
  const tryMe = async () =>{
    let allTrips = [];
    await firestore()
    .collection("trip")
    .onSnapshot((querySnapshot) => {
      const trips = [];

      querySnapshot.forEach((documentSnapshot) => {
        trips.push({
          ...documentSnapshot.data(),
          docId: documentSnapshot.id,
        });
      });
      settripsState ? settripsState (trips) : null;
      allTrips = trips;
    });
  }
  tryMe();
}, []);

useEffect(() => {
  console.log("trips altered");
  if(tripsState.length)
  {
    console.log("updated");
    let arr=[];
    tripsState.map((trip)=>{
      trip.itinerary.map((x)=>{
        // console.log(x);
        for(const property in x)
        {
          // console.log(x[property]);
          arr.push(x[property]);
        }
        // console.log(x[0]);
      });
    });
    setcards(arr);
    console.log("processed",arr.length);
  }
  // console.log(tripsState);
}, [tripsState]);


const justDoIt=()=>{
  console.log("pressed:)",cards.length);
  console.log(tripsState[0].itinerary);
  // if(flag) return ;
  let cnt=0;
  // cards.map(async(x)=>{
    cnt++;
    const cur = {
      type: "itinerary",
      cardId: cnt,
      shortDesc: ,
      longDesc: ,
      poc: ,
      place: ,
      price: ,
      discount: ,
      ratings: ,
      videoUrl: ,
      multiImageUrl: ,
      title: ,
    };
  //   // console.log(cur);
  //   firestore()
  //     .collection("cards")
  //     .doc(`${cnt}`)
  //     .set(cur);
  //   console.log("pushing");
  // })
  // console.log("ended");
  flag=1;
 }


return (
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
)};

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

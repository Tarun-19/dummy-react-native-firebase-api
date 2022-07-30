import React,{useState,useEffect} from 'react'
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
  } from 'react-native';
import firestore from '@react-native-firebase/firestore';

function searchingPage() {

const [trips, settrips] = useState([]);
useEffect(() => {

    let allTrips = [];
//   await 
       firestore()
       .collection('trip')
       .onSnapshot(querySnapshot => {
         const trips2=[];
         querySnapshot.forEach(documentSnapshot => {
        //   let ok=true;

        //   console.log(...documentSnapshot.data());

        //   if(ok==true)
        // if(...documentSnapshot.data().whereArrayContains("metaData","a"))
          trips2.push({
            ...documentSnapshot.data().place,
            docId: documentSnapshot.id,
          });
         });
        //  settrips(allTrips);
         settrips ? settrips(trips2) : null;
         allTrips = trips2;
       });
       
       setTimeout(()=>{
           console.log("2sec")
           let tmp="";
           
           for(let x in trips)
           {
               console.log(trips[x]);
            //    tmp=trips[x].join("");
            // tmp=String(trips[x]);
               for(let y in trips[x])
               {
                   console.log(trips[x][y].toLowerCase());
                   tmp+=trips[x][y].toLowerCase();
               }
           }
           console.log(tmp)
       },2000)
},[settrips])

console.log(trips[0])

  return (
    <View>
        <Text>
            Hemlosodfi
        </Text>
    </View>
  )
}

export default searchingPage
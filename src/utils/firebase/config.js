import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDEPUtwUS7wpJrElyodGwolL50spp75sDE',
  authDomain: 'vuelab-39d78.firebaseapp.com',
  projectId: 'vuelab-39d78',
  storageBucket: 'vuelab-39d78.appspot.com',
  messagingSenderId: '996379900331',
  appId: '1:996379900331:web:de1d0bbcd8d0c4d0337aee'
}

//   init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }

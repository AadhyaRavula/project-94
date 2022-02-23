// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyByY-OR-q-BbolNAaY16bY823tf4h7r4Ik",
  authDomain: "project-kwiter-ecdd5.firebaseapp.com",
  databaseURL: "https://project-kwiter-ecdd5-default-rtdb.firebaseio.com",
  projectId: "project-kwiter-ecdd5",
  storageBucket: "project-kwiter-ecdd5.appspot.com",
  messagingSenderId: "469568049182",
  appId: "1:469568049182:web:47f31aa2b165d559f9de0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  function logout()
    {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "index.html";
    }


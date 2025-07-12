
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('adminLoginBtn').onclick = () => {
  const email = document.getElementById('adminEmail').value;
  const password = document.getElementById('adminPassword').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      location.href = "/dashboard.html"; // your admin page here
    })
    .catch(error => {
      document.getElementById('adminErrorMsg').textContent = "Login failed. Try again.";
    });
};

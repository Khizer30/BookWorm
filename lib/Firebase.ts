import { initializeApp, getApps, type FirebaseOptions } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE!);

// Initialize Firebase
if (!getApps().length)
{
  initializeApp(firebaseConfig);
}
const auth: Auth = getAuth();

export default auth;
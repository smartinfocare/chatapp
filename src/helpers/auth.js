import { auth } from "../services/firebase";

//signup using auth object of firebase
export function signup(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}


//signin using auth object of firebase
export function signin(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

//signin using google with  auth object of firebase
export function signInWithGoogle() {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
}

//signin using github with  auth object of firebase
export function signInWithGitHub() {
  const provider = new auth.GithubAuthProvider();
  return auth().signInWithPopup(provider);
}

//logout the user
export function logout() {
  return auth().signOut();
}

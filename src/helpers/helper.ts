export default function isLoggedIn(): boolean {
  if (localStorage.getItem('user')) {
    console.log('logged in');
    return true;
  }
  return false;
}

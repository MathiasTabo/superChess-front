import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import './App.css';
import Login from './component/Login';

function Dashboard() {
  return (
    <h2>Dashboard</h2>
  );
}

// function Login() {
//   const [userName, setUserName] = useState<string>('');
//   const [password, setPassword] = useState<string>('');

//   const [token, setToken] = useState<string>('');

//   const [userNameCreate, setUserNameCreate] = useState<string>('');
//   const [passwordCreate, setPasswordCreate] = useState<string>('');
//   const [passwordValidate, setPasswordValidate] = useState<string>('');

//   async function login() {
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ userName, password }),
//     };
//     message.loading({ content: 'Loading...', key: 'updatable' });
//     try {
//       const response = await fetch('http://localhost:3001/login', requestOptions);
//       if (response.ok) {
//         const data = await response.json();
//         if (data.id) {
//           message.success('logged in', 2);
//         }
//         console.log(data);
//         setToken(data.id);
//       } else {
//         const data = await response.json();
//         console.log(data.message);
//         message.error({ content: data.message, key: 'updatable', duration: 10 });
//       }
//     } catch (e) {
//       message.error({ content: e, key: 'updatable', duration: 2 });
//     }
//   }

//   async function signup() {
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         userName: userNameCreate, password: passwordCreate, confirmPassword: passwordValidate,
//       }),
//     };
//     message.loading({ content: 'Loading...', key: 'updatable' });
//     try {
//       const response = await fetch('http://localhost:3001/register', requestOptions);
//       if (response.ok) {
//         const data = await response.json();
//         if (data.id) {
//           message.success('User Created', 2);
//         }
//         console.log(data);
//         setToken(data.id);
//       } else {
//         const data = await response.json();
//         console.log(data.message);
//         message.error({ content: data.message, key: 'updatable', duration: 10 });
//       }
//     } catch (e) {
//       message.error({ content: e, key: 'updatable', duration: 2 });
//     }
//   }

//   function Token() {
//     if (token) {
//       return (
//         <Redirect to={{
//           pathname: '/lobby',
//           // state: { token: token },
//         }}
//         />
//       );
//     }
//     return (
//       <div />
//     );
//   }

//   return (
//     <div
//       style={{ display: 'flex' }}
//     >
//       <div style={{ width: '35%' }}>
//         <h1>Login</h1>
//         <Input placeholder="Username" onChange=
// {(event: any) => { setUserName(event.target.value); }} />
//         <Input.Password placeholder="Password" onChange={(event: any) =>
// { setPassword(event.target.value); }} />
//         <Button style={{ marginTop: '3%' }} onClick={async () => login()}>Login</Button>
//       </div>
//       <div style={{ width: '35%', marginLeft: '10%' }}>
//         <h1>Signup</h1>
//         <Input
//           placeholder="Create Username"
//           onChange={(event) => { setUserNameCreate(event.target.value); }}
//         />
//         <Input.Password placeholder=
// "Create Password" onChange={(event) => { setPasswordCreate(event.target.value); }} />
//         <Input.Password placeholder="Validate Password" onChange={(event) =>
// { setPasswordValidate(event.target.value); }} />
//         <Button style={{ marginTop: '3%' }} onClick={async () => signup()}>Signup</Button>
//       </div>
//       <Token />
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Login} exact path="/" />
        <Route component={Dashboard} exact path="/lobby" />
      </Switch>
    </Router>
  );
}

export default App;

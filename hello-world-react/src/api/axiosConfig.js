import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080', // TODO
  headers: {
    // 'ngrok-skip-browser-warning': true
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
  }
});

// export async function signUp(student) {
//   try {
//     axios.put(SERVER, student);
//   } catch (e) {
//     console.log(e.message);
//     throw new Error(e.message);
//   }
// }

// export async function getAllStudents() {
//   try {
//     const data = axios.get(`${SERVER}/api/v1/students/all`);
//     return data;
//   } catch (e) {
//     console.log(e.message);
//   }
// }
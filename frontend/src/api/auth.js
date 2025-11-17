import axios from 'axios';
const loginUser = async (email, password) => {
try {
const response = await axios.post('https://mi-api.com/login', { email, password });
console.log(response.data);
} catch (error) {
console.error(error);
}
};

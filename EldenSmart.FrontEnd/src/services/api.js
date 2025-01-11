import axios from 'axios';

const API_URL = 'https://localhost:5001/api';

export const login = async(username, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, {
            username,
            password,
        });
        return response.data; // Trả về kết quả từ API
    } catch (error) {
        console.error('Lỗi khi đăng nhập:', error.response.data || error.message);
        throw error.response.data || { message: 'Lỗi không xác định!' };
    }
};
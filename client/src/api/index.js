import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_DOMAIN;

export const getBook = async (isbn) => {
	try {
		const response = await axios.get(`${BASE_URL}/api/books/${isbn}`);

		return response.data;
	} catch (error) {
		throw error.response.data.errors[0].detail;
	}
};

export const getIsbnType = async (isbn) => {
	try {
		const response = await axios.get(`${BASE_URL}/api/books/which_isbn/${isbn}`);
		return response.data;
	} catch (error) {
		throw error.response.data.errors[0].detail;
	}
};

export const convertIsbn = async (isbn) => {
	try {
		const response = await axios.get(`${BASE_URL}/api/books/isbn_conversion/${isbn}`);

		return response.data;
	} catch (error) {
		throw error.response.data.errors[0].detail;
	}
};
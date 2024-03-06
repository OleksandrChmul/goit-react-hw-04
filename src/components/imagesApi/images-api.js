import axios from 'axios'

const ACCESS_KEY = 'ARMbcgsZPVw0Mxyy9bBTBZqg3b-XLG22hBnS1zShYZE'
axios.defaults.baseURL = 'https://api.unsplash.com/'
axios.defaults.headers.common['Authorization'] = `Client-ID ${ACCESS_KEY}`

export async function getImages(query, page = 1, perPage = 12) {
	const { data } = await axios.get('search/photos', {
		params: {
			query,
			page,
			per_page: perPage,
		},
	})

	return data
}

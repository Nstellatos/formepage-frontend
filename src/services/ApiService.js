class ApiService {
	constructor(api) {
		this.api = api;
	}
	getVideos = () =>
		fetch(this.api + '/videos').then((response) => response.json());

	/*
	createVideo = (newVideo) => {
		return fetch(this.api + '/videos', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newVideo),
		}).then((response) => response.json());
	};
	*/

	createVideo = (newVideo) => {
		return fetch(this.api + '/videos', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newVideo),
		}).then((response) => response.json());
	};
}

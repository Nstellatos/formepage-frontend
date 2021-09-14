class ApiService {
	constructor(api) {
		this.api = api;
	}
	getVideos = () =>
		fetch(this.api + '/videos').then((response) => response.json());
}

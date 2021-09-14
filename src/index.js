const api = new ApiService('http://localhost:3000');

api.getVideos().then(console.log);

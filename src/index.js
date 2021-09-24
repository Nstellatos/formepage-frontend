const buttonDiv = () => document.getElementById('button-control');
const button = () => document.getElementById('button');
const ulDiv = () => document.getElementById('list');
const ul = () => document.getElementById('videos-list');

document.addEventListener('DOMContentLoaded', () => {
	button().addEventListener('click', handleClick);
});

const handleClick = () => {
	fetch('http://localhost:3000/videos')
		.then((response) => response.json())
		.then((json) => renderVideos(json))
		.catch(handleError);
};

const renderVideos = (videos) => {
	videos.forEach((element) => {
		const li = document.createElement('li');
		li.innerHTML = `
        <h1 class="video-category-name">${element.category.name}</h1>
        <h2 class="video-card">
        <iframe src="https://www.tiktok.com/embed/${element.video_url}"   allowfullscreen scrolling="no" allow="encrypted-media;"></iframe>
</h2>
        `;
		ul().appendChild(li);
	});
};

const handleError = (error) => {
	console.log(error);
};

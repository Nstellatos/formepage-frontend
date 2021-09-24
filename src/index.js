const buttonDiv = () => document.getElementById('button-control');
const buttonShow = () => document.getElementById('button-show');
const buttonNew = () => document.getElementById('button-new');
const ulDiv = () => document.getElementById('list');
const ul = () => document.getElementById('categories-list');
const videoForm = () => document.getElementById('video-form');

document.addEventListener('DOMContentLoaded', () => {
	buttonShow().addEventListener('click', handleClick);
	buttonNew().addEventListener('click', displayForm);
});

const handleClick = (e) => {
	if (ul().children.length < 1) {
		fetch('http://localhost:3000/categories')
			.then((response) => response.json())
			.then((json) => renderCategories(json))
			.catch(handleError);
	} else {
		ul().innerHTML = '';
	}
};

const displayForm = () => {
	if (!videoForm()) {
		fetchCategoriesForSelect();
		list.insertAdjacentHTML(
			'afterend',
			`
        <form id="video-form">
      <label for="video_url">Paste your link here:</label><br>
      <input type="text" name="video_url"><br>
      <label for="video-category">Category:</label>
      <select id="category_id">
      </select>
      <input type="submit" value="add video"><br>
      </form>
        `,
		);
		videoForm().addEventListener('submit', handleSubmit);
	} else {
		videoForm().remove();
	}
};
const fetchCategoriesForSelect = () => {
	fetch('http://localhost:3000/categories')
		.then((resp) => resp.json())
		.then((json) =>
			json.map(
				(catObj) => `<option value="${catObj.id}"> ${catObj.name}</option>`,
			),
		)
		.then(
			(collection) =>
				(document.querySelector('select#category_id').innerHTML =
					collection.join(' ')),
		);
};
const renderCategories = (categories) => {
	console.log('all categories');
	ul().innerHTML += "<h1 id='categories-header'> Categories</h1>";
	categories.forEach((element) => renderCategory(element));
};
const renderCategory = (category) => {
	const h2 = document.createElement('h2');
	const a = document.createElement('a');
	a.id = `category-${category.id}`;
	a.innerText = category.name;
	a.href = '#';
	a.addEventListener('click', (e) => renderVideos(e, category));
	h2.appendChild(a);
	ul().appendChild(h2);
};
const renderVideos = (e, category) => {
	const nextSibling = e.target.nextSibling;
	if (nextSibling) {
		const children = Array.from(e.target.parentNode.children);
		const lis = children.slice(1);
		lis.forEach((li) => li.remove());
	} else {
		category.videos.forEach((element) => renderVideo(element, category.id));
	}
};

const renderVideo = (video, catId) => {
	const a = document.getElementById(`category-${catId}`);
	const li = document.createElement('li');
	a.dataset.catId = catId;
	li.innerHTML = `
        <span class="video-card">
        <iframe src="https://www.tiktok.com/embed/${video.video_url}" allowfullscreen scrolling="no" allow="encrypted-media;"></iframe>
</span>
<button class="delete-video" data-id="${video.id}"> Delete </button>
        `;
	a.parentNode.appendChild(li);
};

const handleSubmit = () => {
	debugger;
};

const handleError = (error) => {
	console.log(error);
};

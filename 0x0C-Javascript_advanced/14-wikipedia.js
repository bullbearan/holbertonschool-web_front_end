function createElement(data) {
	const paragraph = document.createElement('p');
	paragraph.innerHTML = data;
	document.body.append(paragraph);
}
function queryWikipedia(callback) {
	const httpRequest = new XMLHttpRequest();
	httpRequest.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
	httpRequest.onreadystatechange = () => {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200){
				callback(JSON.parse(httpRequest.responseText).query.pages[21721040].extract)
			} else {
				alert("There was a problem with the request.");
			}
		}
	}
	httpRequest.send();
}
queryWikipedia(createElement);

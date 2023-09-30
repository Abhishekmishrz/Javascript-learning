const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8dcfe2b1bcmshf230d2ef771617ap1ec2c1jsned3e0a13f6cc',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
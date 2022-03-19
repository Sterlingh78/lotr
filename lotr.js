const fetchMovieData = () => {
    const movieList = [];
    const url = 'https://the-one-api.dev/v2/movie';
    fetch(url,{
        method: 'get',
        headers: new Headers({
            'Authorization': 'Bearer GvoPGRxCPSTgP9elaEsj'
        })
    })
    .then(response => response.json())
    .then(data => {
        for (i = 2; i <= 7; i++) {
            console.log(data.docs[i])
            let profile = document.createElement("div")
            profile.className = "profile"
            let name = document.createElement("h2")
            let nameContent = document.createTextNode(`${data.docs[i].name}`)
            let academyWins = document.createElement("p")
            let academyContent = document.createTextNode(`Academy Award Wins: ${data.docs[i].academyAwardWins}`)
            let revenue = document.createElement("p")
            let revenueContent = document.createTextNode(`Box Office Revenue in Millions: ${data.docs[i].boxOfficeRevenueInMillions}`)
            let runtime = document.createElement("p")
            let runtimeContent = document.createTextNode(`Runtime in Minutes: ${data.docs[i].runtimeInMinutes}`)
            name.appendChild(nameContent)
            academyWins.appendChild(academyContent)
            runtime.appendChild(runtimeContent)
            revenue.appendChild(revenueContent)
            profile.appendChild(name)
            profile.appendChild(academyWins)
            profile.appendChild(revenue)
            profile.appendChild(runtime)
            document.getElementById("wrapper").appendChild(profile)
        }
    })
}
fetchMovieData();
const jokeEle = document.querySelector(".joke");
const btnEle = document.querySelector(".btn");

// getJokes();

const apiKey = "jWOMtZWDMSVCsZ3/wk8qWg==I8EOETWyrRV7DmuB";

const options = {
    method : "GET",
    headers: {
        "X-Api-Key" : apiKey,
    },
}

async function getJokes() {
    try {
        btnEle.disabled = true
        btnEle.innerText = "Loading...";
        jokeEle.innerHTML = "Updating...";

        const apiURL = "https://api.api-ninjas.com/v1/dadjokes";
        const response = await fetch(apiURL, options);
        const data = await response.json();
        // console.log(data[0].joke);

        btnEle.disabled = false;
        jokeEle.innerHTML = data[0].joke;
        btnEle.innerText = "Tell me a joke";
    }catch(err) {
        jokeEle.innerHTML = "Somthing Wrong ! Please Try again after sometime.";
        btnEle.disabled = false;
        btnEle.innerText = "Tell me a joke";
        console.log(err);
    }

}

btnEle.addEventListener("click", getJokes);
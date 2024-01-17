const result = [];

function searchJob (title, location) {

    title = title.toLowerCase();
    location = location.toLowerCase();

    jobs.forEach(job => {
        const jobTitle = job.title.toLowerCase();
        const jobLocation = job.location.toLowerCase();

        if (jobLocation.includes(location) && jobTitle.includes(title)) {
            result.push(job);
        }
    })

    return {
        count: result.length,
        result
    }
}

//console.log(searchJob("marketing","NY"))
//console.log(result);

function findJob() {
    const jobTitle = document.querySelector("#jobTitle").value;
    const jobLocation = document.querySelector("#jobLocation").value;

    const results = searchJob(jobTitle, jobLocation);

    return results
}

const button = document.querySelector("form");
button.addEventListener("submit", (e)=> {
    e.preventDefault();
    showJobs();
})

function showJobs() {
    const resultsDiv = document.getElementById("results");
    const resultTitle = document.createElement("h2");
    resultTitle.textContent = "Ecco i risultati della tua ricerca:"

    /*result.forEach((element) => {
        const card = document.createElement("div");
        card.classList.add("jobCard");
        const title = document.createElement("p");
        title.textContent = "ciao"
    })*/

    resultsDiv.append(resultTitle);
}; 
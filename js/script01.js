function searchJob (jobTitle, jobLocation) {
    let title = jobTitle.tolowercase();
    let location = jobLocation.tolowercase();
    let result = [];
    let count = 0;

    jobs.forEach(job => {
        if (jobs.location.includes(location) && jobs.title.includes(title)) {
            result.push(job);
        }
    })

    return {result,
    count: result.length}
}

searchJob()

console.log(searchJob(developer, US));

//console.log(searchJob(developer, NY));

/*const jobTitle = document.querySelector("#jobTitle");
const jobLocation = document.querySelector("#location");
const searchBtn = document.querySelector("#searchBtn");

console.log(jobTitle, jobLocation, searchBtn);*/
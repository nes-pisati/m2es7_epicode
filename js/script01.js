const jobTitle = document.querySelector("#jobTitle");
const jobLocation = document.querySelector("#location");

console.log(jobTitle, jobLocation);

function searchJob (jobTitle, jobLocation) {
    let title = jobTitle.value.tolowercase();
    let location = jobLocation.value.tolowercase();

    jobs.forEach(job => {
        if (jobs.location.includes(location) && jobs.title.includes(title)) {
            
        }
    })

}
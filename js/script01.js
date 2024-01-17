let result = [];
let count = 0; 

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

    count = result.length;

    return {
        count,
        result
    }
}

//console.log(searchJob("marketing","US"))

function findJob() {
    const jobTitle = document.querySelector("#jobTitle").value;
    const jobLocation = document.querySelector("#jobLocation").value;

    if ((jobTitle != "")&&(jobLocation != "")){
    let results = searchJob(jobTitle, jobLocation);

    const resultsDiv = document.getElementById("results");
    const resultTitle = document.createElement("h2");
    //console.log(results);

    if (result.length>=1){
    
    resultTitle.innerHTML = "Ecco i risultati della tua ricerca del ruolo " + jobTitle + " nella località " + jobLocation;
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("cardContainer");
    resultsDiv.append(resultTitle, cardContainer);

    for (let i=0; i <result.length; i++) {
        const card = document.createElement("div");
        card.classList.add("jobCard");
        const title = document.createElement("p");
        title.classList.add("jobTitleField");
        title.innerHTML = "<span>Job Title: </span><br>" + result[i].title;
        const location = document.createElement("p");
        location.classList.add("jobLocationField");
        location.innerHTML = "<span>Job Location: </span><br>" + result[i].location;

        card.append(title, location)
        cardContainer.append(card);
    }} else {
        resultTitle.innerHTML = "Non ci sono posizioni corrispondenti alla tua richiesta";
        resultsDiv.append(resultTitle);
    }} 
    
    else {
        alert("Per favore compila i campi richiesti")
    }
}


const button = document.querySelector("form");
button.addEventListener("submit", (e)=> {
    e.preventDefault();
    findJob();
    cleanInput();
})

function cleanInput(){
    document.querySelector("#jobTitle").value = "";
    document.querySelector("#jobLocation").value = "";
    result = [];
}
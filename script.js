// Sample job listings data
const jobs = [
    { title: "Software Developer", category: "tech", location: "New York", description: "Develop and maintain web applications." },
    { title: "Financial Analyst", category: "finance", location: "Chicago", description: "Analyze financial data and prepare reports." },
    { title: "Marketing Specialist", category: "marketing", location: "San Francisco", description: "Create marketing campaigns and manage social media." },
    { title: "Backend Developer", category: "tech", location: "Austin", description: "Build server-side logic and APIs." },
    { title: "Data Scientist", category: "tech", location: "Seattle", description: "Analyze and interpret complex data." },
];

// Function to display jobs
function displayJobs(filteredJobs) {
    const jobList = document.getElementById("job-list");
    jobList.innerHTML = ""; // Clear the existing list

    filteredJobs.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Category:</strong> ${job.category}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
        `;
        jobList.appendChild(jobCard);
    });
}

// Function to handle filter change
function filterJobs() {
    const category = document.getElementById("category").value;
    let filteredJobs = jobs;

    if (category !== "all") {
        filteredJobs = jobs.filter(job => job.category === category);
    }

    displayJobs(filteredJobs);
}

// Event listener for filter change
document.getElementById("category").addEventListener("change", filterJobs);

// Display all jobs initially
displayJobs(jobs);

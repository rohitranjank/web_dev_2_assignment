const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

let sampleEvent = [
    {
        title: "Web Dev",
        date: "2026-05-04",
        category: "workshop",
        description: "Web development workshop"
    }, 
    {
        title: "Tech Conference",
        date: "2026-07-04",
        category: "conference",
        description: "Tech performance and networking"
    }
];

function createEventCard(eventData) {
    const card = document.createElement("div");
    card.className = "event-card"; 
    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;
    return card;
}

function addEvent(eventData) {
    const emptyState = document.getElementById("empty-state"); 
    if (emptyState) {
        emptyState.remove();
    }
        
    eventContainer.appendChild(createEventCard(eventData));    
}

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };
    addEvent(eventData);
    eventForm.reset();    
});

eventContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".event-card");

    if (event.target.classList.contains("delete-btn")) {
        card.remove();
    }

    if (!eventContainer.querySelector(".event-card")) {
        eventContainer.innerHTML = `<div id="empty-state">No events yet. Add your first event!</div>`;
    }
});

addSampleBtn.addEventListener("click", () => {
    sampleEvent.forEach(item => addEvent(item));
});

clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML = `<div id="empty-state">No events yet. Add your first event!</div>`;
});
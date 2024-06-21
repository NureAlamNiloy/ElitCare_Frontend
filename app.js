const loadServices=()=>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => displayServices(data))
    .catch((err) => console.log(err))
};

const displayServices =(services) =>{
    console.log(services)
    services.forEach((service) => {
        const parent = document.getElementById("service-card");
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="card shadow h-100">
                <div class="ratio ratio-16x9">
                    <img src=${service.url}>
                </div>
                <div class="card-body p-3 p-xl-5">
                    <h3 class="card-title h5">${service.title}</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div><a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
        parent.appendChild(li)
    });
};


loadServices();




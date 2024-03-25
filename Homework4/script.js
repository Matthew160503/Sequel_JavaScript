const url = "https://jsonplaceholder.typicode.com/users";

const addButtonEl = document.querySelector(".addBtn");
const containerEl = document.querySelector(".container");

addButtonEl.addEventListener("click", async () => {
    const data = await getData(url);
    for (const user of data) {
        createUserCard(user);
    }
});

async function getData(url) {
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}

function createUserCard(user) {
    const divEl = document.createElement("div");
    divEl.classList.add("box");

    const titleEl = document.createElement("h2");
    titleEl.textContent = user.name;

    const descriptionEl = document.createElement("p");
    descriptionEl.textContent = `Address: ${user.address.street} - company: ${user.company.name} - email: ${user.email} - phone: ${user.phone} - username: ${user.username}`;

    const deleteBtnEl = document.createElement("button");
    deleteBtnEl.textContent = "Delete user";

    divEl.appendChild(titleEl);
    divEl.appendChild(descriptionEl);
    divEl.appendChild(deleteBtnEl);
    containerEl.appendChild(divEl);
    deleteBtnEl.addEventListener("click", (event) => {
        divEl.remove(event.target.closest("div"));
    });
}

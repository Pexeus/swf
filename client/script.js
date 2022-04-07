let height

async function load() {
    const player = document.querySelector("#flash")
    height = player.clientWidth / 1.3333

    const req = await axios.get("/files")
    const menu = document.querySelector(".menu")

    req.data.forEach(file => {
        const p = document.createElement("p")

        p.addEventListener("click", () =>{
            flash(file)
        })

        p.innerHTML = file
        p.id = "button"

        menu.appendChild(p)
    });
}

function flash(file) {
    swfobject.embedSWF(`/swf/${file}`, "flash", "300", height, "9.0.0");
}

load()
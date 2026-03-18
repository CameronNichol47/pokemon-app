async function dataFetch() {
    try {
        const name = document.getElementById("pokemonInput").value; if (!name) return;
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`); 
        const d = await data.json();

        document.getElementById("name").textContent = d.name.toUpperCase();
        document.getElementById("height").innerHTML = `<span class="label">Height:</span><span class="content">${d.height}</span>`;

        const abilities = d.abilities.map(a => " " +
            a.ability.name[0].toUpperCase() + a.ability.name.slice(1)
        );

        document.getElementById("Abilities").innerHTML = `<span class="label">Abilities:</span><br> <span class="content">${abilities.join("<br>")}</span>`;
        document.getElementById("img").src=d.sprites.front_default;

        const indices = d.game_indices.map(a =>
            `${a.version.name[0].toUpperCase() + a.version.name.slice(1)}: ${a.game_index}`
        );

        document.getElementById("Indices").innerHTML = `<span class="label">Indices:</span><br> <span class="content">${indices.join("<br>")}</span>`;
    } catch (err) {
        console.log(err);
    }
}

dataFetch();
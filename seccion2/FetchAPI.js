//api 

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then( res => {
        return res.json()

    })
    
    .then(data => {
        console.log(data.results)
        data.results.forEach(element => {
            console.log(element.name)
        })
    })
    
    .catch(error => console.log(error));


    //async await

    const obtenerPokemones = async() => {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const data = await res.json();
            console.log(data.results);
            
        } catch (error) {
            console.log(error);
        }
    };

    obtenerPokemones();

    

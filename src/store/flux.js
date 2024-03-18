/**
 *  getStore: () => {}, //funcion que devuelve el objeto store con cada uno de los atributos alli definidos, 
 *  getActions: () => {}, //funcion que devuelve el objeto actions con cada una de las funciones alli definidas,
 *  setStore: () => {} // funcion que recibe como argumento un objeto con cada uno de los atributos que se desea actulizar o asignar un valor 
 */
const getStore = ({ getStore, getActions, setStore }) => {
    return {
        store: {

            people: [],
            planets: [],
            vehicles: [],
            favorites: []


        },
        actions: {

            /* 
            fetch de people, planets, vehicles y add favorites */

            getpeople: () => {
                fetch("https://swapi.dev/api/people/")
                    .then(response => response.json())
                    .then (data=>{
                        console.log(data.results)
                        setStore({people:data.results})
                    })
                },


            },
            getplanets: () => {
                fetch("https://swapi.dev/api/planets/")
                    .then(response => response.json())
                    .then (data=>{
                        console.log(data.results)
                        setStore({planets:data.results})
                    })
                },

            getvehicles: () => {
                fetch("https://swapi.dev/api/vehicles/")
                    .then(response => response.json())
                    .then (data=>{
                        console.log(data.results)
                        setStore({vehicles:data.results})
                    })
                },

            getPeopleDetails: () => {
                const store = getStore(); /* acceder a un atributo */
                    fetch(`https://swapi.dev/api/people/`).then(resp => resp.json())
                     .then(data => { (data) })
            },
            getPlanetsDetails: () => {
                const store = getStore(); 
                    fetch(`https://swapi.dev/api/planets/`).then(resp => resp.json())
                     .then(data => { (data) })
            },
            getVehiclesDetails: () => {
                const store = getStore(); 
                    fetch(`https://swapi.dev/api/vehicles/`).then(resp => resp.json())
                     .then(data => { (data) })
            },
        }
    }
}

    export default getStore
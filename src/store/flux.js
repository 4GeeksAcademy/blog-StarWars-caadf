/**
 *  getStore: () => {}, //funcion que devuelve el objeto store con cada uno de los atributos alli definidos, 
 *  getActions: () => {}, //funcion que devuelve el objeto actions con cada una de las funciones alli definidas,
 *  setStore: () => {} // funcion que recibe como argumento un objeto con cada uno de los atributos que se desea actulizar o asignar un valor 
 */
const getStore = ({ getStore, getActions, setStore }) => {
    return {
        store: {

            people: {},
            planets: {},
            vehicles: {},
            favorites: {}


        },
        actions: {

            /* 
            fetch de people, planets, vehicles y add favorites */

            getpeople: () => {
                fetch("https://swapi.dev/api/people/")
                    .then(response => response.json())
                    .then(data => setStore({ people: data }))

            },
            getplanets: () => {
                fetch("https://swapi.dev/api/planets/")
                    .then(response => response.json())
                    .then(data => setStore({ planets: data }))

            },

            getvehicles: () => {
                fetch("https://swapi.dev/api/vehicles/")
                    .then(response => response.json())
                    .then(data => setStore({ vehicles: data }))
            },

            getPeopleDetails: (id) => {
                const store = getStore(); /* acceder a un atributo */
                    fetch(`https://swapi.dev/api/people/${id}`).then(resp => resp.json())
                     .then(data => { (data) })
            },
            getPlanetsDetails: (id) => {
                const store = getStore(); 
                    fetch(`https://swapi.dev/api/planets/${id}`).then(resp => resp.json())
                     .then(data => { (data) })
            },
            getVehiclesDetails: (id) => {
                const store = getStore(); 
                    fetch(`https://swapi.dev/api/vehicles/${id}`).then(resp => resp.json())
                     .then(data => { (data) })
            },
        }
    }
}

    export default getStore
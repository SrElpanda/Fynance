/*Funciones Acciones*/ 
//Función que obtiene el valor de una accion de la api, codigo api: HQMU0DMF1NTO3NEC
/*async function obtenerAccion(simbolo) {
    let response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${simbolo}&apikey=HQMU0DMF1NTO3NEC`);
    let data = await response.json();
    let precio = data["Global Quote"]["05. price"];
    document.getElementById("accion").innerText = `Precio de ${simbolo}: $${precio}`;
}   
obtenerAccion("AAPL"); // Precio de Apple*/
async function obtenerAccion(simbolo) {
    try {
        let response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${simbolo}&apikey=HQMU0DMF1NTO3NEC`);
        let data = await response.json();

        console.log("Respuesta de la API:", data); // Verifica la estructura

        if (!data || !data["Global Quote"] || !data["Global Quote"]["05. price"]) {
            console.error("Error: La API no devolvió el dato esperado.");
            document.getElementById("accion").innerText = "Error al obtener el precio.";
            return;
        }

        let precio = data["Global Quote"]["05. price"];
        document.getElementById("accion").innerText = `Precio de ${simbolo}: $${precio}`;
    } catch (error) {
        console.error("Error en la petición:", error);
        document.getElementById("accion").innerText = "No se pudo obtener el precio.";
    }
}   

obtenerAccion("AAPL"); // Intenta obtener el precio de Apple

async function sendMessage() {
    let userMessage = document.getElementById("userMessage").value;
    document.getElementById("chat").innerHTML += `<p><strong>Tú:</strong> ${userMessage}</p>`;

    let response = await fetch("http://127.0.0.1:5050/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
    });

    let data = await response.json();
    document.getElementById("chat").innerHTML += `<p><strong>FyBot:</strong> ${data.reply}</p>`;
}
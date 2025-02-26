#Se usa google AI Studio, librerias para el chat
import pathlib
import textwrap
from IPython.display import display
from IPython.display import Markdown
import google.generativeai as genai
#libreria para flask
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#Configurando el chatbot Gemini
genai.configure(api_key='AIzaSyDhSEQUp6LTTA2vTwGliJCsNCjfsiMasTg')
model = genai.GenerativeModel('gemini-1.5-flash')
chat = model.start_chat(history=[])

#Obteniendo los datos desde el frontend con POST
@app.route("/chat", methods=["POST"])
def chat_response():
    data = request.json
    user_message = data.get("message", "")
    response = chat.send_message(user_message)
    print(response.text)
    return jsonify({"reply": response.text})

if __name__ == "__main__":
    app.run(debug=True, port=5050)



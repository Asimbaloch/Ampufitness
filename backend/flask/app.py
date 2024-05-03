from flask import Flask, jsonify, request, render_template
from chat_history import *


#app instance
app = Flask(__name__)

# method to get questionnaire details
@app.route("/questions", methods=['POST'])
def submit_form():
    keys = request.form.keys()
    
    data = []
    
    for key in keys:
        val = request.form.get(key)
        data.append({key : val})
    
    print("Form data received: ", data)
    return "form received"



# method to get user input
@app.route("/ampufitness", methods=['POST'])
def user_prompt():
    user_input = request.form.get('text')

    add_user_message(user_input)
    
    response = generate_response()
    
    return response


if __name__=="__main__":
    app.run(debug=True)
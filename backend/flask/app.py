from flask import Flask, jsonify, request, render_template
from promptengineering import format_data


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


@app.route("/ampufitness", methods=['POST'])
def user_prompt():
    user_input = request.form.get('text')

    # TODO
    # add a func here that sends the user input and adds it in a dict
    
    return user_input
    

if __name__=="__main__":
    app.run(debug=True)
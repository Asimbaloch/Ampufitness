from flask import Flask, jsonify, request, render_template
from promptengineering import format_data


#app instance
app = Flask(__name__)


@app.route("/questions", methods=['GET'])
def get_form():
    return render_template('test.html')


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


if __name__=="__main__":
    app.run(debug=True)
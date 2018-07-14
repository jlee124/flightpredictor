# import the Flask class from the flask module
from flask import Flask, render_template
import requests
import json

# create the application object
app = Flask(__name__)

# use decorators to link the function to a url
@app.route('/')
def home():
    return "Avoid flight delays!"  # return a string

@app.route('/welcome')
def welcome():
    return render_template('index.html')  # render a template

@app.route('/query')
def query():
    fare = request.args.get('fare') #if key doesn't exist, returns None
    date = request.args.get('date')

    return '''<h1>The fare is: {}</h1>
              <h1>The date is: {}'''.format(fare, date)

# start the server with the 'run()' method
if __name__ == '__main__':
    app.run(debug=True)

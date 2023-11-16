from flask import Flask,render_template  # Import Flask to allow us to create our app

app = Flask(__name__)

@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'

@app.route('/dojo')
def dojo():
    return "Dojo!👌"

@app.route('/say/<name>')
def say_hi(name):
    return  f"Hi {name}!"

@app.route('/repeat/<int:times>/<words>')
def repeated(times,words):
    return  words*times





if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True) 
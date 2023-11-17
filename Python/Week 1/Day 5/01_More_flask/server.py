from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
# --------------------------------------------------------------------

@app.route('/')          # The "@" decorator associates this route with the function immediately following
def index():
    users=[
        {"name":"John","age":25},
        {"name":"Jane","age":28},
        {"name":"Joe","age":32},
        {"name":"Jr","age":43},
        {"name":"Jcole","age":39}
    ]
    return render_template('index.html', users=users)

@app.route('/circles/<color>/<int:number>')          # The "@" decorator associates this route with the function immediately following
def circles(color,number):
    return render_template('circles.html', color=color,number=number)



# -------------------------------------------------------------------------
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True,port=5001)    # Run the app in debug mode.


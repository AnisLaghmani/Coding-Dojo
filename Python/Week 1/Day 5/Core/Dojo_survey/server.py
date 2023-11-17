from flask import Flask,render_template,redirect,request,session # Import Flask to allow us to create our app
app = Flask(__name__)
app.secret_key='safety first'


@app.route("/")
def index_html():
    return render_template("index.html")

@app.route("/process",methods=['POST'])
def process():
    print('-'*20,request.form,'-'*20)
    session["name"]=request.form['name']
    session["dojo_location"]=request.form['dojo_location']
    session["fav_language"]=request.form['fav_language']
    session["Comments"]=request.form['Comments']
    return redirect('/result')

@app.route('/result')
def display():
    return render_template("result.html")


# ----------------------------------------------------------------------------------------
    
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True, port=5000)
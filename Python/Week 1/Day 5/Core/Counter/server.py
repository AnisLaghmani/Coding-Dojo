from flask import Flask,render_template,redirect,request,session # Import Flask to allow us to create our app
app = Flask(__name__)
app.secret_key='we are not safe'

@app.route("/")
def index_html():
    session["x"]=session.get("x",0)+1
    return render_template("index.html", x=session["x"])

@app.route("/reset")
def reset():
    session.clear()
    return redirect('/')

@app.route("/increase")
def increase():
    session["x"]=session.get("x")+1
    return render_template("index.html", x=session["x"])

# ----------------------------------------------------------------------------------------
    
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True, port=5000)
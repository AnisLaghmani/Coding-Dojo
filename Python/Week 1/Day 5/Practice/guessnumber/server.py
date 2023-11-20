from flask import Flask,render_template,redirect,request,session
app = Flask(__name__)
app.secret_key='safety first'
import random 
# ---------------------------------------------------------------------------------
@app.route("/")
def home():
    session['x']=random.randint(1, 100)
    return render_template("index.html")

@app.route("/guess")
def index_html(text='',decoration='',replay=''):
    if int(session['guess'])<session['x']:
        text="Too low"
        decoration="bg-danger text-warning col-7 text-center display-3"
    elif int(session['guess'])==session['x']:
        text=f"You guest it! the number is {session['x']}"
        decoration="bg-success text-warning col-7 text-center display-3"
        replay="play again"
    elif int(session['guess'])>session['x']:
        text="Too High"
        decoration="bg-danger text-warning col-7 text-center display-3"
    return render_template("index.html",text=text ,decoration=decoration,replay=replay)

@app.route("/process",methods=['POST'])
def process():
    session['guess']=request.form['guess']
    return redirect('/guess')

@app.route("/replay")
def replay(): 
    return redirect('/')
# ----------------------------------------------------------------------------------------
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True, port=5000)
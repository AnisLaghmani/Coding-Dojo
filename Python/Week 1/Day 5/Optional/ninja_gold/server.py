from flask import Flask,render_template,redirect,request,session
app = Flask(__name__)
app.secret_key='not safe'
import random 
# ---------------------------------------------------------------------------------------
@app.route("/")
def index_html():
    return render_template("index.html")
# ---------------------------------------------------------------------------------------
@app.route("/process_money",methods=['POST'])
def process():
    if request.form["cave"]:
        total+=random.randint(5,10)
    if request.form["farm"]:
        total+=random.randint(10,20)
    if request.form["house"]:
        total+=random.randint(2,5)
    if request.form["cave"]:
        total+=random.randint(-50,50)
    session['total']=total
    return redirect('/')
# ----------------------------------------------------------------------------------------
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True, port=5000)
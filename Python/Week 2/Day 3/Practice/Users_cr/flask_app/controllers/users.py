from flask_app import app
from flask import redirect,request,render_template
from flask_app.models.user_model import User

@app.route('/')
def index():
    return redirect('/read_all')

@app.route('/read_all')
def users():
    all_users=User.get_all()
    return render_template('read_all.html',all_users=all_users)

@app.route('/users/new')
def create():
    return render_template('create.html')

@app.route('/add', methods=['post'])
def add():
    data={"first_name":request.form['first_name'],"last_name":request.form['last_name'],"email":request.form['email']}
    User.save(data)
    return render_template('create.html')


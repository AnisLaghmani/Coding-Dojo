from flask_app import app
from flask import render_template,session,redirect,request,flash
from flask_app.models.user_model import User
from flask_app.models.party_model import Party

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    if not 'user_id' in session:
        return redirect('/')
    all_partys=Party.get_all_with_poster()
    return render_template('dashboard.html',all_partys=all_partys)


@app.route('/my_partys')
def my_partys():
    if not 'user_id' in session:
        return redirect('/')
    # ----------------------!!!!!!!!!!!!!!!!!!!
    all_partys=Party.get_all_by_user_id({'user_id':int(session["user_id"])})
    return render_template('my_partys.html',all_partys=all_partys)


@app.route('/register', methods=['post'])
def register():
    if User.validate(request.form):
        pw_hash=bcrypt.generate_password_hash(request.form['password'])
        data={**request.form,'password':pw_hash}
        user_id=User.create(data)
        session['user_id']=user_id
        session["first_name"]=data['first_name']
        return redirect("/dashboard")
    return redirect("/")

@app.route('/login', methods=['post'])
def login():
    user_from_db=User.get_by_email({'email':request.form['email']})
    if not user_from_db:
        flash("Email doesn't exist.try to register first","login")
        return redirect('/')
    if not bcrypt.check_password_hash(user_from_db.password,request.form["password"]):
        flash("Password wrong please try again","login")
        return redirect('/')
    session['user_id']=user_from_db.id
    session["first_name"]=user_from_db.first_name
    return redirect("/dashboard")

@app.route('/logout', methods=['post'])
def logout():
    session.clear()
    return redirect("/")

@app.route('/participate/<int:party_id>')
def participate(party_id):
    Party.participate({"party_id":party_id,"user_id":int(session["user_id"])})
    return redirect (f'/partys/{party_id}')
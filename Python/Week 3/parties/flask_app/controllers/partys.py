from flask_app import app
from flask import render_template,session,redirect,request
from flask_app.models.party_model import Party

@app.route('/partys/new')
def new_party():
    if not 'user_id' in session:
        return redirect('/')
    return render_template('new_party.html')

@app.route('/partys/<int:id>')
def one_party(id):
    if not 'user_id' in session:
        return redirect('/')
    party=Party.get_by_id({'id':id})
    party.is_in=Party.check_participations({'party_id':id,'user_id':int(session['user_id'])})
    return render_template('one_party.html',party=party)

@app.route('/partys/<int:id>/edit')
def edit_party(id):
    if not 'user_id' in session:
        return redirect('/')
    party=Party.get_by_id({'id':id})
    return render_template('edit_party.html',party=party)


@app.route('/partys/create',methods=['post'])
def create_party():
    if Party.validate(request.form):
        data={**request.form,"user_id":int(session['user_id'])}
        print("🦋🦋🦋🦋🦋🦋🦋🦋",data,"🦋🦋🦋🦋🦋🦋🦋🦋")
        db_return=Party.create(data)
        print(db_return)
        return redirect(f'/partys/{db_return}')
    return redirect ('/partys/new')

@app.route('/partys/update',methods=['post'])
def update_party():
    if Party.validate(request.form):
        data={**request.form}
        print("🦋🦋🦋🦋🦋🦋🦋🦋",data,"🦋🦋🦋🦋🦋🦋🦋🦋")
        Party.update(data)
        # print(db_return)
        return redirect('/dashboard')
    return redirect (f'/partys/{request.form["id"]}/edit')

@app.route('/partys/<int:id>/destroy')
def destroy_party(id):
    if not 'user_id' in session:
        return redirect('/')
    Party.destroy({'id':id})
    return redirect("/dashboard")




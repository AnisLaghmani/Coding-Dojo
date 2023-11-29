from flask_app import app
from flask import render_template,session,redirect,request
from flask_app.models.pokemon_model import Pokemon

@app.route('/pokemons/new')
def new():
    if not 'user_id' in session:
        return redirect('/')
    return render_template('add_pokemon.html')

@app.route('/pokemons/<int:id>')
def one_pokemon(id):
    if not 'user_id' in session:
        return redirect('/')
    pokemon=Pokemon.get_by_id({'id':id})
    return render_template('one_pokemon.html',pokemon=pokemon)

@app.route('/pokemons/<int:id>/edit')
def edit_pokemon(id):
    if not 'user_id' in session:
        return redirect('/')
    pokemon=Pokemon.get_by_id({'id':id})
    return render_template('edit_pokemon.html',pokemon=pokemon)


@app.route('/pokemons/create',methods=['post'])
def create_pokemon():
    if Pokemon.validate(request.form):
        data={**request.form,"user_id":int(session['user_id'])}
        print("🦋🦋🦋🦋🦋🦋🦋🦋",data,"🦋🦋🦋🦋🦋🦋🦋🦋")
        db_return=Pokemon.create(data)
        print(db_return)
        return redirect('/dashboard')
    return redirect ('/pokemons/new')

@app.route('/pokemons/update/<int:id>',methods=['post'])
def update_recipe(id):
    if Pokemon.validate(request.form):
        data={**request.form,'id':id}
        print("🦋🦋🦋🦋🦋🦋🦋🦋",data,"🦋🦋🦋🦋🦋🦋🦋🦋")
        Pokemon.update(data)
        # print(db_return)
        return redirect('/dashboard')
    return redirect (f'/pokemons/{request.form["id"]}/edit')

@app.route('/pokemons/<int:id>/destroy')
def destroy_recipe(id):
    if not 'user_id' in session:
        return redirect('/')
    Pokemon.destroy({'id':id})
    return redirect("/dashboard")




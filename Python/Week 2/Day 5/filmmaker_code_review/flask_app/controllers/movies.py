from flask_app import app
from flask import redirect,request,render_template
from flask_app.models.filmmaker_model import Filmmaker
from flask_app.models.movie_model import Movie

@app.route('/movies')
def movies():
    all_movies=Movie.get_all()
    all_filmmakers=Filmmaker.get_all()
    return render_template('/movies.html',all_filmmakers=all_filmmakers,all_movies=all_movies)

@app.route('/create/movie',methods=["post"])
def create_movie():
    data={"title":request.form['title'],"year":request.form['year'],"filmmaker_id":request.form['filmmaker_id']}
    Movie.save(data)
    return redirect('/movies')


# @app.route('/movie/<int:id>')
# def details(id):
#     data= {
#         "id":id
#     }
#     return render_template('show_movie.html',filmmaker=Filmmaker.get_one_by_id(data))

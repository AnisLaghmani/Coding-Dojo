from flask import Flask,render_template
app = Flask(__name__)
# --------------------------------------

@app.route("/<int:x>/<int:y>/<color1>/<color2>")
def index_html(x,y,color1,color2):
    color=color1
    return render_template("index.html",x=x,y=y,color1=color1,color2=color2,color=color)

# -----------------------------------------
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True, port=5005)
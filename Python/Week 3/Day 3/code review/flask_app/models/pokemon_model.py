from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash

class Pokemon:
    def __init__(self,data):
        self.id=data["id"]
        self.user_id=data["user_id"]
        self.name=data["name"]
        self.type=data["type"]
        self.power=data["power"]
        self.hp=data["hp"]
        self.image=data["image"]
        
    @classmethod
    def create(cls,data):
        query="""INSERT INTO pokemons 
                            (user_id,name,type,power,hp,image)
                            VALUES (%(user_id)s,%(name)s,%(type)s,%(power)s,%(hp)s,%(image)s);"""
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_pokemon_by_user(cls,data):
        query="""SELECT * FROM pokemons JOIN users ON users.id=pokemons.user_id WHERE users.id=%(user_id)s;"""
        results=connectToMySQL(DATABASE).query_db(query,data)
        pokemons=[]
        for row in results:
            pokemons.append(cls(row))
        return pokemons
    
    @classmethod
    def get_by_id(cls,data):
        query="""SELECT * FROM pokemons WHERE id=%(id)s;"""
        result=connectToMySQL(DATABASE).query_db(query,data)
        if result:
            return cls(result[0])
        return None
    @classmethod
    def update(cls,data):
        print("🐝"*10, data,"🐝"*10)
        query=""" UPDATE pokemons SET name=%(name)s,type=%(type)s,power=%(power)s,
                hp=%(hp)s,image=%(image)s WHERE id=%(id)s;"""
        return connectToMySQL(DATABASE).query_db(query,data)
    @classmethod
    def destroy(cls,data):
        query="""DELETE FROM pokemons WHERE id=%(id)s;"""
        return connectToMySQL(DATABASE).query_db(query,data)
            
    @staticmethod
    def validate(data):
        is_valid=True
        if len(data['name'])<2:
            is_valid=False
            flash(" recipe name is required")
        if len(data['power'])<1:
            is_valid=False
            flash("power should be positive")
        if len(data['hp'])<1:
            is_valid=False
            flash("hp should be positive")
        if (data['image'])=="":
            is_valid=False
            flash("img link needed")
        return is_valid
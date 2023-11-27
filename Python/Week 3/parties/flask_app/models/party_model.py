from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash

class Party:
    def __init__(self,data):
        self.id=data["id"]
        self.user_id=data["user_id"]
        self.title=data["title"]
        self.location=data["location"]
        self.date=data["date"]
        self.all_ages=data["all_ages"]
        self.description=data["description"]
    
    @classmethod
    def create(cls,data):
        query="""INSERT INTO partys 
                            (user_id,title,location,date,all_ages,description)
                            VALUES (%(user_id)s,%(title)s,%(location)s,%(date)s,%(all_ages)s,%(description)s)"""
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_all(cls):
        query="""SELECT * FROM partys"""
        results=connectToMySQL(DATABASE).query_db(query)
        all_partys=[]
        for row in results:
            all_partys.append(cls(row))
        return all_partys
    
    @classmethod
    def get_by_id(cls,data):
        query="""SELECT * FROM partys WHERE id=%(id)s"""
        result=connectToMySQL(DATABASE).query_db(query,data)
        if result:
            return cls(result[0])
        return None
    
    @classmethod
    def get_all_by_user_id(cls,data):
        query="""SELECT * FROM partys WHERE user_id=%(user_id)s"""
        results=connectToMySQL(DATABASE).query_db(query,data)
        user_partys=[]
        for row in results:
            user_partys.append(cls(row))
        return user_partys
    
    @classmethod
    def update(cls,data):
        query="""UPDATE partys SET title=%(title)s,location=%(location)s,date=%(date)s,
                all_ages=%(all_ages)s,description=%(description)s WHERE id=%{id}s"""
        return connectToMySQL(DATABASE).query_db(query,data)
    @classmethod
    def destroy(cls,data):
        query="""DELETE FROM partys WHERE id=%{id}s)"""
        return connectToMySQL(DATABASE).query_db(query,data)

    @staticmethod
    def validate(data):
        is_valid=True
        if len(data['title'])<2:
            is_valid=False
            flash("Party title is required")
        if len(data['location'])<2:
            is_valid=False
            flash("Party location is required")
        if len(data['description'])<10:
            is_valid=False
            flash("PArty description must be at least 10")
        if len(data['date'])=="":
            is_valid=False
            flash("PArty Date must be provided")
        return is_valid
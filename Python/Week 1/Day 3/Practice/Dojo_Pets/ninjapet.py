class Ninja:
    def __init__(self,first_name , last_name , pet,treats , pet_food):
        self.first_name=first_name
        self.last_name=last_name
        self.pet=pet
        self.treats=treats
        self.pet_food=pet_food
    def walk(self):
        self.pet.play()
        return self
    def feed(self):
        self.pet.eat()
        return self
    def bathe(self):
        self.pet.noise()
        return self
    def display_ninja_info(self):
        print(f'name {self.first_name}\n pet {self.pet.name}')
        return self

class Pet:
    def __init__(self,name,type_v,tricks):
        self.name=name
        self.type=type_v
        self.tricks=tricks
        self.health=0
        self.energy=0
    def sleep(self):
        self.energy+=25
        return self
    def eat(self):
        self.energy+=5
        self.health+=10
        return self
    def play(self):
        self.health+=5
        return self
    def noise(self):
        print(f'{self.tricks}')
        return self
ninja1=Ninja("anis","laghmani",Pet("blacky","rottweiler","barking"),"whiskas","fish")
print(ninja1)
ninja1.display_ninja_info()
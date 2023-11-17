from pet import Pet
from ninja import Ninja
from cat import Cat

boyka=Pet("Boyka","dog","attack")
anis=Ninja("Anis","Laghmani","dhamer","meat",boyka)

anis.feed().walk().bathe()

gatitos=Cat("gatitos","sleep")
gatitos.noise()
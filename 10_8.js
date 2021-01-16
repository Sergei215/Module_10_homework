let myMap = new Map()

myMap.set(1,'Привет')
myMap.set(true,567783)
myMap.set('Дом',"Новый")

for (let name of myMap.keys()){
    console.log(`Ключ - ${name}, значение - ${myMap.get(name)}`)
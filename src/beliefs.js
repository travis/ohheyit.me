var dtype = data[ 'http://schema.org/Document' ]

var title = "https://ohhey.fyi/thisisa/belief#title"

var believes = "https://ohhey.fyi/someone/believes"
var hasBeliefs = "https://ohhey.fyi/someone/hasBeliefs"
var hasDisbeliefs = "https://ohhey.fyi/someone/hasDisbeliefs"


var beliefs = data["https://tvachon.inrupt.net/beliefs"]
var catsUrl = "https://tvachon.inrupt.net/beliefs/cats-are-cool"
var cats = data[catsUrl]

var dogsUrl = "https://tvachon.inrupt.net/beliefs/dogs-are-neat"
var dogs = data[dogsUrl]

// beliefs.type.add(dtype).then(x => console.log(x))

beliefs[believes].add(catsUrl).then(x => console.log(x))
beliefs[believes].add(dogsUrl).then(x => console.log(x))

cats[title].add("Cats are cool").then(x => console.log(x))

beliefs[believes].then(x => console.log(x))

for await (const url of ldflex.from('https://tvachon.inrupt.net/public/ohhey/itme/beliefs')) {
  console.log("thing: ", url)
}
console.log(`  - ${url} is a belief`);


['cats-are-cool']["https://ohhey.fyi/thisisa/belief/title"].add("Cats are cool").then(console.log)

ldflex["https://tvachon.inrupt.net/public/ohhey/itme/beliefs"]["https://tvachon.inrupt.net/public/ohhey/itme/beliefs/cats-are-cool"].then(x => console.log("X", x))

ldflex["https://tvachon.inrupt.net/public/ohhey/itme/beliefs/"].then(x => console.log("X", x))

ldflex.from(['https://tvachon.inrupt.net/public/ohhey/itme/beliefs', 'https://tvachon.inrupt.net/public/ohhey/itme/beliefs/cats-are-cool'])['https://tvachon.inrupt.net/public/ohhey/itme/beliefs/cats-are-cool']['https://ohhey.fyi/thisisa/belief/title'].then(console.log)

ldflex.from(['https://tvachon.inrupt.net/public/ohhey/itme/beliefs/'])['https://tvachon.inrupt.net/public/ohhey/itme/beliefs/cats-are-cool']["https://ohhey.fyi/thisisa/belief/title"].set("Cats are cool").then(console.log)

ldflex["https://tvachon.inrupt.net/public/ohhey/itme/beliefs/"]['https://tvachon.inrupt.net/public/ohhey/itme/beliefs/cats-are-cool']["https://ohhey.fyi/thisisa/belief/title"].set("Cats are cool").then(x => console.log("X", x))

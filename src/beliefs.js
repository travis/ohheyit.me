var dtype = data[ 'http://schema.org/Document' ]

var title = "https://ohhey.fyi/thisisa/belief/title"

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

for await (const url of beliefs[believes])
console.log(`  - ${url} is a belief`);

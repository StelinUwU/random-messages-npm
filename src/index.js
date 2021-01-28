const messages = [
  "Oscar",
  "Ana",
  "Pablo",
  "Diego",
  "Laura",
  "Juan",
  "Henrique",
  "Maria",
  "Paco",
  "Stelin"
];
const randomMsg = () =>{
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = { randomMsg }
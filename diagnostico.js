//Diagnóstico de la version de Node
const { version } = require('node:process');

console.log(`Version: ${version}`);


//Diagnóstico de la plataforma
const { platform } = require('node:process');

console.log(`This platform is ${platform}`);


//Diagnóstico de argumentos
const { argv } = require('node:process');

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});


//Diagnóstico de variables de entorno
const { env } = require('node:process');

env.TEST="este-es-un-test";
console.log(env.TEST);

const response = await fetch("https://bun.sh");

// const data = await Bun.readableStreamToArrayBuffer(response.body!); // => ArrayBuffer
// const data = await Bun.readableStreamToBlob(response.body!); // => Blob

const response1 = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
const data = await Bun.readableStreamToJSON(response1.body!); // => object
// const data = await Bun.readableStreamToText(response.body!); // => string
// const data = await Bun.readableStreamToArray(response.body!); // => unknown[]

console.log(data);

// How to convert a Blob to an ArrayBuffer in JavaScript

// EXAMPLE 1 - Using blob.arrayBuffer()

async function example() {
  const blob = new Blob(['bobbyhadz.com']);

  const buf = await blob.arrayBuffer();

  console.log(buf);

  console.log(buf.byteLength);

  console.log(buf.slice(0, 5));
}

example();

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using the new Blob() constructor

// async function example() {
//   const blob = new Blob(['bobbyhadz.com']);

//   const buf = await blob.arrayBuffer();

//   console.log(buf);

//   console.log(buf.byteLength);

//   console.log(buf.slice(0, 5));

//   const blobAgain = new Blob([buf]);

//   const str = await blobAgain.text();
//   console.log(str); // 👉️ bobbyhadz.com
// }

// example();

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert a Blob to an ArrayBuffer using .then() in JavaScript

// const blob = new Blob(['bobbyhadz.com']);

// blob.arrayBuffer().then(buf => {
//   console.log(buf);

//   console.log(buf.byteLength);

//   console.log(buf.slice(0, 5));
// });

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert a Blob to an ArrayBuffer using the Response() constructor

// async function example() {
//   const blob = new Blob(['bobbyhadz.com']);

//   const buf = await new Response(blob).arrayBuffer();

//   console.log(buf);

//   console.log(buf.byteLength);

//   console.log(buf.slice(0, 5));
// }

// example();

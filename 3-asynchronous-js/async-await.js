const fs = require("fs");
const superagent = require("superagent");

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("File not found...");

      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("Couldn't write to a file");
      resolve("Sucess");
    });
  });
};

const getDogPics = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`,
    );
    console.log(res.body.message);

    await writeFilePro("dog-img.txt", res.body.message);
    console.log("Random dog image saved to file...");
  } catch (err) {
    console.log(err);

    throw err;
  }
  return "2: Ready....";
};

//  Calling promises function

//1. Regular way a:
/*
console.log("1: I will get a dog pics!!!");
getDogPics();
console.log("2: Done getting dog pics!!!");
// This is experimemnted before returning the promise value and throwing the error.

//1. Regular way b:
console.log("1: I will get a dog pics!!!");
const x = getDogPics();
console.log(x);
console.log("3: Done getting dog pics!!!");
// This is experimemnted after returning the promise value and throwing the error.

*/

// Using Promise so it returns the value of x as a log
/*
console.log("1: I will get a dog pics!!!");
getDogPics().then((x) => {
  console.log(x);
  console.log("3: Done getting dog pics!!!");
}).catch(err => {
    console.log(err)
)}

*/

// using async
/* (async () => {
    try {
        console.log('1: I will get a dog pics!!!')
        const x = await getDogPics()
        console.log(x);
        console.log('3: Done getting dog pics!!!');
    } catch {
        console.log('Error!!!');
    }
}) ();

*/

// waiting for multiple promises simultenously...
/*
const getDogPics = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res1Pro =  superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`,
    );
    const res2Pro =  superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`,
    );
    const res3Pro =  superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`,
    );
    const allPro = await Promise.all([res1Pro, res2Pro, res3Pro])
    const imgs = allPro.map(el => el.body.message)

    console.log(imgs);

    await writeFilePro("dog-img.txt", imgs.join('\n'));
    console.log("Random dog image saved to file...");
  } catch (err) {
    console.log(err);

    throw err;
  }
  return "2: Ready....";
};
 */

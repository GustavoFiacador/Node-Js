import { fromPath } from "pdf2pic";
const path = './pdf/teste.pdf';

const options = {
    density: 300,
    saveFilename: "untitled",
    savePath: "./images/",
    format: "jpg",
    width: 2480 ,
    height: 3508
  };

  console.time("pdf2img");
  const storeAsImage = fromPath(path, options).bulk(-1);
    storeAsImage.then((resolve) => {
        console.timeEnd("pdf2img");
        return resolve;
    }).catch((err) => {
        console.log(err);
    })
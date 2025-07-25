const fs = require('fs');
const pdfParse = require('pdf-parse');

const parseResume = async (filePath) => {
  const dataBuffer = fs.readFileSync(filePath);
  const pdfData = await pdfParse(dataBuffer);
  return pdfData.text;
};

module.exports = parseResume;

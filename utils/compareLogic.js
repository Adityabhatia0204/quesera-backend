const axios = require('axios');

const compareLogic = async (resumeText, jobDescription) => {
  const prompt = `
Compare the following resume with the job description.

Give:
1. A match score (0–100%)
2. Key strengths
3. Key gaps
4. Suggestions to improve resume

Resume:
${resumeText}

Job Description:
${jobDescription}
`;

  const response = await axios.post(
    'https://fifty-parrots-report.loca.lt/api/generate',
    {
      model: "phi3",
      prompt,
      stream: false
    },
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );

  return {
    response: response.data.response
  };
};

module.exports = compareLogic;

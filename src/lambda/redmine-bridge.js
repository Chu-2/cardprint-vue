import axios from "axios";

const { API_ENDPOINT, MAGIC_KEY } = process.env;

exports.handler = async (event, context) => {
  console.log(event);
  if (event.httpMethod === "GET") {
    if (event.queryStringParameters.issueId) {
      try {
        const response = await axios.get(
          `${API_ENDPOINT}/issues/${
            event.queryStringParameters.issueId
          }.json?key=${MAGIC_KEY}`,
          { maxRedirects: 0 }
        );

        console.log(response.data.issue);
        return createResponse(200, response.data.issue);
      } catch (error) {
        console.error(error);
        return createResponse(400, "Error!");
      }
    }

    return createResponse(400, "Missing required parameter!");
  } else {
    return createResponse(400, `Unsupported HTTP method ${event.httpMethod}`);
  }
};

const createResponse = (statusCode, body) => {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body)
  };
};

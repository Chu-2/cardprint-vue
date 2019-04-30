import axios from "axios";

const { API_ENDPOINT, MAGIC_KEY } = process.env;

exports.handler = async event => {
  if (event.httpMethod === "GET") {
    if (event.queryStringParameters.issueId) {
      try {
        const response = await getIssue(event.queryStringParameters.issueId);

        const issue = {
          id: response.data.issue.id,
          subject: response.data.issue.subject,
          parent: response.data.issue.parent
            ? response.data.issue.parent.id
            : "",
          product: response.data.issue.project.name,
          tracker: response.data.issue.tracker.name
        };

        return createResponse(200, issue);
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

const getIssue = issueId => {
  const url = `${API_ENDPOINT}/issues/${issueId}.json?key=${MAGIC_KEY}`;
  return axios.get(url, { maxRedirects: 0 });
};

import mondaySdk from "monday-sdk-js";

const monday = mondaySdk();
// Load API token from environment variable
const apiToken = import.meta.env.VITE_MONDAY_API_TOKEN;
monday.setToken(apiToken);

// Function to make API call
export async function callMondayApi(query, variables = {}) {
  try {
    const response = await monday.api(query, { variables });
    return response;
  } catch (error) {
    console.error("Monday API error:", error);
    throw error;
  }
}

// Function to fetch subitems for a given item ID
export async function getSubitemsByItemId(itemId) {
  const query = `query {
    items(ids: ${itemId}) {
      subitems {
        id
        name
        column_values {
          ... on BoardRelationValue {
            display_value
          }
          ... on MirrorValue {
            display_value
          }
          id
          text
          column{
            title
          }
        }
      }
    }
  }`;
  return await callMondayApi(query);
}
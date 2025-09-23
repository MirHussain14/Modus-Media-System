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

// Function to fetch proposal meta info and then account/contact info
export async function getProposalMetaAndAccount(itemId) {
  // Use subitems query to get linked ID, proposal number, and address
  const subitemsRes = await getSubitemsByItemId(itemId);
  console.log("Subitems Query Response:", subitemsRes);
  const item = subitemsRes?.data?.items?.[0];

  const colVals = item?.column_values || [];
  const linkedId = colVals[0]?.linked_item_ids?.[0] || "";
  const address = colVals[1]?.display_value || "";
  const proposalNumber = colVals[2]?.text || "";

  // Query to get account and contact names
  const accountQuery = `query {
    items(ids: ${linkedId}) {
      parent_item {
        column_values(ids: ["board_relation_mkpbszp6", "link_to_accounts"]) {
          ... on BoardRelationValue {
            display_value
            id
          }
          ... on MirrorValue {
            display_value
            id
          }
        }
      }
    }
  }`;
  const accountRes = await callMondayApi(accountQuery);
  console.log("Account Query Response:", accountRes);
  const accountItem = accountRes?.data?.items?.[0];
  const columnValues = accountItem?.parent_item?.column_values || [];
  const contactName = columnValues.find(col => col.id === "board_relation_mkpbszp6")?.display_value || "";
  const accountName = columnValues.find(col => col.id === "link_to_accounts")?.display_value || "";

  return {
    proposalNumber,
    address,
    accountName,
    contactName,
  };
}

// Function to fetch subitems for a given item ID
export async function getSubitemsByItemId(itemId) {
  const query = `query {
    items(ids: ${itemId}) {
      column_values(ids: ["pulse_id_mkvyks68", "board_relation_mksymw2b", "lookup_mkvy3k6s"]) {
        ... on BoardRelationValue {
          linked_item_ids
        }
        text
        ... on MirrorValue {
          display_value
        }
      }
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
          column {
            title
          }
        }
      }
    }
  }`;
  const subitemsRes = await callMondayApi(query);
  console.log("Subitems Query Response:", subitemsRes);
  return subitemsRes;
}
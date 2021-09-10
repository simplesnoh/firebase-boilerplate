import { firebaseConfig } from "../apiKeys";

//NOTES!!
// api.getRequest() --- 1 param --- (resource)
// api.getSingleRequest() -- 3 params --- (resource, param, value)
// api.postRequest() --- 2 params --- (resource, info)
// api.putRequest() --- 3 params --- (resource, dataId, info)
// api.deleteRequest() -- 2 params --- (resource, dataId)

// Resource ---> name of table EX: users, pets, etc
// Param ---> What property you are searching by EX: pet_name, book_author
// Value ---> the value of that property EX: Nebula, J.K. Rowling
// info ---> the object that needs to be added to the database
// DataId ----> the ID of the object

const requestUrl = `https://${firebaseConfig.projectId}-default-rtdb.firebaseio.com`;

export const api = {
  // Get all objects from a table
  getRequest: function (resource) {
    return fetch(`${requestUrl}/${resource}.json`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  },
  // Get one object using a paramater
  getSingleRequest: function (resource, param, value) {
    return fetch(`${requestUrl}/${resource}.json?${param}=${value}`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch(() => {
        return "Nope";
      });
  },
  // Add to a table
  postRequest: function (resource, info) {
    return fetch(`${requestUrl}/${resource}.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((response) => response.json())
      .then(() => {});
  },
  // Update a single object in a table
  putRequest: function (resource, dataId, info) {
    return fetch(`${requestUrl}/${resource}/${dataId}.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((response) => response.json())
      .then(() => {});
  },
  // Delete a single object from a table
  deleteRequest: function (resource, dataId) {
    return fetch(`${requestUrl}/${resource}/${dataId}.json`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {});
  },
};

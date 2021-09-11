import { firebaseConfig } from "../apiKeys";

//NOTES!!
// api.getRequest() --- 1 param --- (resource)
// api.getWithParameterRequest() -- 3 params --- (resource, param, value)
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
    return new Promise((res) => {
      return fetch(`${requestUrl}/${resource}.json`)
        .then((response) => response.json())
        .then((data) => {
          res(data);
        })
        .catch((error) => {
          console.log("getRequest Error");
          console.log("error code", error.code);
          console.log("error message", error.message);
        });
    });
  },
  // Get objects using a parameter to find a certain value in a property
  // Ex: param=pet_name and value="Nebula" means get me all the pets
  // who are named "Nebula"
  // Could be used with object's Id to get one specific object
  getWithParameterRequest: function (resource, param, value) {
    return new Promise((res) => {
      return fetch(`${requestUrl}/${resource}.json?${param}=${value}`)
        .then((response) => response.json())
        .then((data) => {
          res(data);
        })
        .catch((error) => {
          console.log("getWithParameterRequest Error");
          console.log("error code", error.code);
          console.log("error message", error.message);
        });
    });
  },
  // Add to a table
  postRequest: function (resource, info) {
    return new Promise((res, rej) => {
      return fetch(`${requestUrl}/${resource}.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((response) => response.json())
        .then((data) => {
          res(data);
        })
        .catch((error) => {
          console.log("postRequest Error");
          console.log("error code", error.code);
          console.log("error message", error.message);
        });
    });
  },
  // Update a single object in a table
  putRequest: function (resource, dataId, info) {
    return new Promise((res) => {
      return fetch(`${requestUrl}/${resource}/${dataId}.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((response) => response.json())
        .then((data) => {
          res(data);
        })
        .catch((error) => {
          console.log("putRequest Error");
          console.log("error code", error.code);
          console.log("error message", error.message);
        });
    });
  },
  // Delete a single object from a table
  deleteRequest: function (resource, dataId) {
    return new Promise((res) => {
      return fetch(`${requestUrl}/${resource}/${dataId}.json`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          res(data);
        })
        .catch((error) => {
          console.log("deleteRequest Error");
          console.log("error code", error.code);
          console.log("error message", error.message);
        });
    });
  },
};

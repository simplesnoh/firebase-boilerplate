import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// NOTES!
// photoStorage.upload() --- 2 params ---> (bucket, file)

// bucket --> the name of the folder in firebase  where
// your file should go.
// EX: "profile_images", "pet_photos"

// file ---> the file you are uploading

export const photoStorage = {
  // Upload a photo or file to your firebase storage
  upload: function (bucket, file) {
    return new Promise((res) => {
      const storage = getStorage();
      const storageRef = ref(storage, `${bucket}/${file.name}`);
      uploadBytes(storageRef, file)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            // returns the url where it is hosted in firebase
            res(downloadURL);
          });
        })
        .catch((error) => {
          console.log("error", error);
        });
    });
  },
};

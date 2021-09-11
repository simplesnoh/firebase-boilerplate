import { emailAuth } from "../helpers/emailAuth";
import { photoStorage } from "../helpers/photoStorage";
import { Button } from "semantic-ui-react";
import { useState } from "react";

function Authenticated() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  // Handles selecting an image
  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  // Handles calling the upload image function
  const handleUpload = () => {
    photoStorage.upload("images", image).then((downloadUrl) => {
      // Returns image URL, you will want to add this
      // to an object in your database
      // EX: a user if it's a profile picture
      setImageUrl(downloadUrl);
    });
  };

  return (
    <>
      {/* Example sign out button, either signOut function will work */}
      <Button basic color="green" onClick={() => emailAuth.signOut()}>
        Sign Out
      </Button>
      <div>
        {/* A file upload is simply an input with type "file" */}
        <input type="file" placeholder="Search..." onChange={handleChange} />
        <Button basic color="green" onClick={handleUpload}>
          Upload Photo
        </Button>
      </div>
      {/* Example of how you can display image with URL */}
      {imageUrl && <img src={imageUrl} />}
    </>
  );
}

export default Authenticated;

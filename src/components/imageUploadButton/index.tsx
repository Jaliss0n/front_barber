import { IconButton } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

interface Props {
  name: string;
  setImgProfileBarber: any;
}

const ImageUpload = ({ name, setImgProfileBarber }: Props) => {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const file: File = event.target.files[0];
      setImgProfileBarber(file);
    }
  };

  return (
    <div>
      <IconButton aria-label="upload picture" component="label">
        <input
          hidden
          accept="image/*"
          name={name}
          id={name}
          type="file"
          onChange={handleImageUpload}
        />
        <AddAPhotoIcon
          sx={{
            fontSize: "5em",
            color: "white",
            backgroundColor: "#3c73d2",
            padding: "10%",
            borderRadius: "40px",
            "&:hover": {
              backgroundColor: "#2854a2",
            },
          }}
        />
      </IconButton>
    </div>
  );
};

export default ImageUpload;

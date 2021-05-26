// @ts-nocheck
// others

const loadImage = (
  event: Event,
  setSrc: (file: string | ArrayBuffer | null) => void
) => {
  const reader = new FileReader();
  const selectedFile = event.target.files;

  reader.onload = (e) => {
    setSrc(e.target.result);
  };

  reader.readAsDataURL(selectedFile[0]);
};

export default loadImage;

// @ts-nocheck
// others

const loadImage = (
  event: Event,
  setImageData: (file: string | ArrayBuffer | null) => void
) => {
  const reader = new FileReader();
  const { files } = event.target;

  reader.onload = (e) => {
    setImageData({
      file: files[0],
      src: e.target.result,
    });
  };

  reader.readAsDataURL(files[0]);
};

export default loadImage;

const imageTobase64 = async (image) => {
  const reader = new FileReader();
  reader.readAsDataURL(image);

  const data = await new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  return data;
};

export default imageTobase64;

// const convertToBase64 = async (url) => {
//   try {
//     const response = await fetch(url);
//     const blob = await response.blob();
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const data = reader.result;
//     };
//     reader.readAsDataURL(blob);
//     return data;
//   } catch (error) {
//     console.error("Error converting image to base64:", error);
//   }
// };

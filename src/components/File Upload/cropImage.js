const getCroppedImg = async (imageSrc, pixelCrop, rotation = 0, createImage, getRadianAngle) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

  canvas.width = safeArea;
  canvas.height = safeArea;

  ctx.translate(safeArea / 2, safeArea / 2);
  ctx.rotate(getRadianAngle(rotation));
  ctx.translate(-safeArea / 2, -safeArea / 2);

  ctx.drawImage(
    image,
    safeArea / 2 - image.width * 0.5,
    safeArea / 2 - image.height * 0.5
  );

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  const cropX = pixelCrop.x * scaleX;
  const cropY = pixelCrop.y * scaleY;
  const cropWidth = pixelCrop.width * scaleX;
  const cropHeight = pixelCrop.height * scaleY;

  canvas.width = cropWidth;
  canvas.height = cropHeight;

  ctx.drawImage(image, cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob);
    }, 'image/jpeg');
  });
};

export function isImageFile(file: File) {
  return file && file.type.startsWith("image/");
}

export const FileToBlob = async (file: File) => {
  const url = URL.createObjectURL(file)

  return await fetch(url)
    .then((res) => res)
    .then((blob) => blob.blob())
}

export const BlobToHTMLImageEl = async (blob: Blob) => {
  const blobUrl = URL.createObjectURL(blob)

  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = (err) => reject(err)
    img.src = blobUrl
  }).then((img) => img)
}

export const FiteToHTMLImageEl = async (file: File) => {
  const blob = await FileToBlob(file)
  return await BlobToHTMLImageEl(blob)
}

export const econdeImageFileToBase64 = async (
  file: File
): Promise<string | ArrayBuffer | null> => {
  return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = (err) => reject(err)
    reader.readAsDataURL(file)
  }).then((base64) => base64)
}

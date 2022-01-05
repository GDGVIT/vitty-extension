export const uploadImage = async (raw: any): Promise<any> => {
  const myHeaders = new Headers()
  myHeaders.append('Accept', 'application/json')

  const formData = new FormData()
  formData.append('file', raw)

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formData,
    redirect: 'follow'
  }

  try {
    const response = await fetch('https://vittyapi.dscvit.com/uploadfile/', requestOptions as any)
    const data = await response.json()
    return data
  } catch (e) {
    return {}
  }
}

export const uploadText = async (raw: string): Promise<any> => {
  const myHeaders = new Headers()
  myHeaders.append('Accept', 'application/json')
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

  const urlEncoded = new URLSearchParams()
  urlEncoded.append('request', raw)

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlEncoded,
    redirect: 'follow'
  }

  try {
    const response = await fetch('https://vittyapi.dscvit.com/uploadtext/', requestOptions as any)
    const data = await response.json()
    return data
  } catch (e) {
    return {}
  }
}

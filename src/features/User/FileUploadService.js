import http from './http-common'

const upload = (file, onUploadProgress) => {
  let formData = new FormData()

  formData.append('file', file)

  return http.post('http://localhost:9002/students/bulk', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    },
    onUploadProgress
  })
}

export default {
  upload
}

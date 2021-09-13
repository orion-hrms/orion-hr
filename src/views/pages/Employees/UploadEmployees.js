import React from "react";

export default function UploadEmployees() {
  return <div>UploadEmployees</div>;
}

// import React, { useState } from 'react'
// import { Storage, API, graphqlOperation } from 'aws-amplify'
// import { createPicture } from '../../../graphql/mutations'

// import awsExports from '../../../aws-exports'
// function UploadEmployees(props) {
//   const [selectedFile, setSelectedFile] = useState(null)
//   const [alert, setAlert] = useState(false)
//   const [tag, setTag] = useState('')

//   const sendImageToDB = async (image) => {
//     console.log('inside db write', image)
//     try {
//       await API.graphql(graphqlOperation(createPicture, { input: image }))
//     } catch (err) {
//       console.log('db write error', err)
//     }
//   }
//   const handleOnFileChange = (e) => {
//     let selectedFile = e.target.files[0]
//     setSelectedFile(selectedFile)
//     console.log('handlefileschangexxxxx', selectedFile)
//   }

//   const handleChange = (e) => {
//     console.log('inside handlechange')
//     e.preventDefault()
//     console.log('{tag}', { tag })
//     console.log('{selectedFile}', selectedFile)
//     //storing image in S3
//     Storage.put(selectedFile.name, selectedFile, {
//       contentType: 'image/png',
//     }).then((result) => {
//       console.log('inside storage')
//       const image = {
//         name: selectedFile.name,
//         tag: tag,
//         file: {
//           bucket: awsExports.aws_user_files_s3_bucket,
//           region: awsExports.aws_user_files_s3_bucket_region,
//           key: selectedFile.name,
//         },
//       }
//       console.log('image payload', image)
//       setAlert(true)
//       console.log('setAlert', alert)
//       sendImageToDB(image)
//     })
//   }

//   return (
//     <div className="container">
//       {alert ? (
//         <div className="alert alert-success alert-dismissible">
//           <button
//             type="button"
//             className="close"
//             data-dismiss="alert"
//             onClick={() => {
//               setAlert(false)
//             }}
//           >
//             &times;
//           </button>
//           <strong>Success!</strong> Image Sucessfully uploaded!!!
//         </div>
//       ) : null}
//       <form className="jumbotron" onSubmit={handleChange}>
//         <input type="file" onChange={handleOnFileChange} />
//         <input
//           type="text"
//           value={tag}
//           placeholder="Enter image Tag Here before uploading your file"
//           onChange={({ target }) => setTag(target.value)}
//         />

//         <button type="submit">Add</button>
//       </form>
//     </div>
//   )
// }

// export default UploadEmployees

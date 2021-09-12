import React, { useState } from 'react'
import { Storage, API, graphqlOperation } from 'aws-amplify'
import { createPicture } from '../graphql/mutations'
import Predictions from '@aws-amplify/predictions'
import awsExports from '../aws-exports'
import './Upload.css'
function UploadPage(props) {
  const [selectedFile, setSelectedFile] = useState(null)
  const [alert, setAlert] = useState(false)
  const [tag, setTag] = useState('')
  const [labels, setLabels] = useState([])
  //const [celeb, setCeleb] = useState([])

  const findImageLabels = async (file) => {
    console.log('inside Label')
    return Predictions.identify({
      labels: {
        source: {
          file,
        },
        type: 'LABELS',
      },
    })
      .then((response) => {
        console.log('lables 1', response)
        let labels = response.labels.map((label) => {
          if (label.metadata.confidence > 70) return label.name
        })
        console.log('lables are', labels)
        console.log('inside 3', labels.filter(Boolean))
        return labels.filter(Boolean)
      })

      .catch((err) => console.log({ err }))
  }

  const celebritySearch = async (file) => {
    console.log('Inside celeb')
    return Predictions.identify({
      entities: {
        source: {
          file,
        },
        celebrityDetection: true, // boolean. It will only show detected celebrities
      },
    })
      .then(({ response }) => {
        response.entities.forEach(({ boundingBox, landmarks, metadata }) => {
          const { name, urls } = metadata // celebrity info
          let celeb = response.entities.map((label) => {
            if (celeb.metadata.confidence > 70) return celeb.name
          })
          return celeb.filter(Boolean)
        })
      })
      .catch((err) => console.log({ err }))
  }

  const sendImageToDB = async (image) => {
    console.log('inside db write', image)
    try {
      await API.graphql(graphqlOperation(createPicture, { input: image }))
    } catch (err) {
      console.log('db write error')
    }
  }
  const handleOnFileChange = (e) => {
    let selectedFile = e.target.files[0]
    setSelectedFile(selectedFile)
    console.log('handlefileschangexxxxx', selectedFile)
  }

  const handleChange = (e) => {
    console.log('inside handlechange')
    e.preventDefault()
    console.log('{tag}', { tag })
    console.log('{selectedFile}', selectedFile)

    //storing image in S3
    Storage.put(selectedFile.name, selectedFile, {
      contentType: 'image/png',
    }).then((result) => {
      findImageLabels(selectedFile).then((labels) => {
        console.log('m retuenddd', labels)
        setLabels(labels)
        const image = {
          name: selectedFile.name,
          tag: tag,
          labels: labels,
          file: {
            bucket: awsExports.aws_user_files_s3_bucket,
            region: awsExports.aws_user_files_s3_bucket_region,
            key: selectedFile.name,
          },
        }
        console.log('image payload', image)
        setAlert(true)
        sendImageToDB(image)
      })
    })
  }

  return (
    <div className="container">
      {alert ? (
        <div className="alert alert-success alert-dismissible">
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            onClick={() => {
              setAlert(false)
            }}
          >
            &times;
          </button>
          <strong>Success!</strong> Image Sucessfully uploaded!!!
        </div>
      ) : null}
      <form className="jumbotron" onSubmit={handleChange}>
        <input type="file" onChange={handleOnFileChange} />
        <input
          type="text"
          value={tag}
          placeholder="Enter image Tag Here before uploading your file"
          onChange={({ target }) => setTag(target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>

    // {alert ? (
    //   <div>
    //     <img
    //       className="jumbotron"
    //       src={selectedFile}
    //       alt=" uploading area..."
    //       width="300"
    //       height="450"
    //     />
    //   </div>
    // ) : null}
  )
}
export default UploadPage

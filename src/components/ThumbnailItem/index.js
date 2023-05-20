// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetail, updateImg, activeId} = props
  const {id, imageUrl, thumbnailUrl, thumbnailAltText} = imageDetail

  const activeInactive =
    id === activeId ? 'thumbnail-img active-img' : 'thumbnail-img inactive-img'

  const changeImg = () => {
    updateImg(id)
  }
  return (
    <li className="list-item">
      <button onClick={changeImg} type="button" className="button">
        <img
          src={thumbnailUrl}
          className={activeInactive}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem

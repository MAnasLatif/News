import React from 'react'

const Component = (props) => {
  let { title, description, imgUrl, newsUrl, author, date } = props;
  return (
    <div className='my-5'>
      <div className="card">
        <img src={imgUrl ? imgUrl : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/08-12-2022/t_52d07853f06d44ca91284d15d9cbe707_name_Screen_Shot_2022_08_12_at_8_31_43_AM.png&w=1440"} className="card-img-top" alt="." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noopener noreferrer" href={newsUrl} target='_blank' className="btn btn-dark btn-sm">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default Component
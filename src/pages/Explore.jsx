import React from 'react'
import {Link} from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'
import Slider from '../components/Slider'
const Explore = () => {
  return (
    <div className='explore'>
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      <main>
        <Slider />
        <p className="exploreCategoryHeading">Categories</p>
        <div className='exploreCategories'>
          <Link to="/category/rent">
            <img 
              src={rentCategoryImage}
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places for rent</p>
          </Link>
          <Link to="/category/sale">
            <img 
              src={sellCategoryImage}
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places for sell</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore
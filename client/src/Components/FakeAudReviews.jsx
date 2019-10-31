import React from 'react';
import styled from 'styled-components';
import SinglePost from './SinglePost.jsx';

var AudReviewList = (props) => {
  return (
    <>
      {props.someReviews.map((review, index) =>
        <SinglePost item={review} key={index} />
      )}
    </>
  )
}

export default AudReviewList;
import React, {Component} from 'react';

const CardFooter = () => {
	return (
		<div className ='cardFooter'>
			<span className='comment'><i className="far fa-comment"/> 3</span>
			<span className='retweet'><i className="fas fa-retweet"/> 11</span>
			<span className='like'><i className="far fa-heart"/> 72</span>
		</div>
	)
}

export default CardFooter
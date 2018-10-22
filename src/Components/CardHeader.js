import React, {Component} from 'react';

const CardHeader = () => {
	return (
		<div className='cardHeader'>
			<img  className='twitImg' src='images/jorge.jpg' alt='Jorge, Author of this tweet.'/>
			<span className='twitName'>Jorge Goris</span>
			<span className='greyText'>@_JorgeGoris_  17 Oct 2018</span>
			<span><i className=" twitbird fab fa-twitter fa-sm"></i></span>
		</div>
	)
}

export default CardHeader

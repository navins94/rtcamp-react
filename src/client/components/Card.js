import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => {
	const { data } = props;
	return (
		<div className="card h-100">
			<img
				className="card-img-top"
				src={
					data._embedded['wp:featuredmedia']
						? data._embedded['wp:featuredmedia']['0'].source_url
						: 'https://via.placeholder.com/300x150'
				}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{data.title.rendered}</h5>
				<div
					className="card-text"
					dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}
				></div>
				<Link to={'/post/' + data.id} className="btn btn-primary">
					Read More
				</Link>
			</div>
		</div>
	);
};

export default Card;

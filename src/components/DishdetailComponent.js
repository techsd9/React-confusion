import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({dish}){
			return(
				<div key={dish.id} className="col-12 col-md-5 m-1">
				<Card>
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
				</div>
			);
}

function RenderComments({comments}){
		// console.log(comments);

		if (comments!=null) {

			const listItems= comments.map((c)=> {
				return(
					<div key={c.id}>
						<ul className= "list-unstyled">
							<li>
								<p>{c.comment}</p>
								<p>-- {c.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</p>
							</li>
						</ul>
					</div>
				);
			});


			return (
				<div className="col-12 col-md-5 m-1">
				<Card>
					<CardBody>
						<h4>Comments</h4>
						{listItems}
					</CardBody>
				</Card>
				</div>
			);

		}else {
			return(
			<div></div>
			);
		}
	}


const Dishdetail = (props) => {
		if (props.dish!= null) {		
			return (
					<div className="container">
						<div className="row">
							<RenderDish dish={props.dish} />
							<RenderComments comments={props.dish.comments} />
						</div>
					</div>
			);	
		} else {
			return (
			<div></div>
			);
		}	
}


export default Dishdetail;


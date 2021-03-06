import React from 'react';
import {Link} from 'react-router-dom';

const LocationCard = ({deleteLocation, location, hasUser}) => {
	return (
		<div className='location-card'>
			<address>
				Visit Us at the {location.name} Location
				<br />
				500 Puppy Way
			</address>
			
			
			{hasUser && (
				<>
				<Link to={`/locations/${location.id}`}>
				<button>Details</button>
			</Link>
				<Link to={`/locations/${location.id}/edit`}>
				<button>Edit</button>
			</Link>
				<button onClick={() => deleteLocation(location.id)}>
					Close
				</button>
				</>
			)}
		</div>
	);
};

export default LocationCard;

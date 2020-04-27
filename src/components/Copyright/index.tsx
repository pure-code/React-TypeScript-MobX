import React from 'react';
import {
	Container,
	Site,
	Heart,
} from './styled';

const Copyright = () => {

	return (
		<Container target="_blank" rel="noopener noreferrer" href='https://pure-code.ru/'>
			С уважением и <Heart>❤ </Heart> к детям!<br/>
			<Site>© 2020 pure-code.ru</Site>
		</Container>
	);
};


export default Copyright;
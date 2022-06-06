const roundData = [
	{
		roundNumber: 1,
		startAddress: {
			address: '16 Moreau Mews, Applecross WA 6153',
			lat: -32.0104,
			lng: 115.83433,
		},
		lpo: {
			address:
				'Applecross Village Newsagency, shop 1/35 Ardross St, Applecross WA 6153',
			lat: -32.0104,
			lng: 115.83433,
		},
		relay: {
			address:
				'Applecross Village Newsagency, shop 1/35 Ardross St, Applecross WA 6153',
			lat: -32.0104,
			lng: 115.83433,
		},
		suburb: 'Applecross',
		hazards: [],
	},
	{
		roundNumber: 2,
		startAddress: {
			address: '6 David St, Mount Pleasant WA 6153',
			lat: -32.0124,
			lng: 115.849,
		},
		lpo: {
			address: '902 Canning Hwy, Applecross WA 6153',
			lat: -32.0104,
			lng: 115.83433,
		},
		relay: {
			address: '902 Canning Hwy, Applecross WA 6153',
			lat: -32.0104,
			lng: 115.83433,
		},
		suburb: 'Mount Pleasant',
		hazards: [],
		// "lat": -32.0124,
		// "lng": 115.849
	},
	{
		roundNumber: 3,
		startAddress: {
			address: '4 Davenport Rd, Booragoon WA 6154',
			lat: -32.04389,
			lng: 115.81795,
		},
		lpo: {
			address: '10/67 McCoy St, Myaree WA 6154',
			lat: -32.04389,
			lng: 115.81795,
		},
		relay: {
			address: '10/67 McCoy St, Myaree WA 6154',
			lat: -32.04389,
			lng: 115.81795,
		},
		suburb: 'Booragoon',
		hazards: [],
		// "lat": -32.04389,
		// "lng": 115.81795
	},
	{
		roundNumber: 4,
		startAddress: {
			address: '3 Davy St, Alfred Cove WA 6154',
			lat: -32.03865,
			lng: 115.81479,
		},
		lpo: {
			address: 'shop 3/67 N Lake Rd, Myaree WA 6154',
			lat: -32.03865,
			lng: 115.81479,
		},
		relay: {
			address: 'shop 3/67 N Lake Rd, Myaree WA 6154',
			lat: -32.03865,
			lng: 115.81479,
		},
		suburb: 'Alfred Cove',
		hazards: [],
		// "lat": -32.03865,
		// "lng": 115.81479
	},
	// {
	// 	roundNumber: 5,
	// 	startAddress: {
	// 		address: '6 David St, Mount Pleasant WA 6153',
	// 		lat: -32.0124,
	// 		lng: 115.849,
	// 	},
	// 	lpo: {
	// 		address: '902 Canning Hwy, Applecross WA 6153',
	// 		lat: -32.0104,
	// 		lng: 115.83433,
	// 	},
	// 	relay: {
	// 		address: '902 Canning Hwy, Applecross WA 6153',
	// 		lat: -32.0104,
	// 		lng: 115.83433,
	// 	},
	// 	startAddress: '57 Redwood Cres, Melville WA 6156',
	// 	suburb: 'Melville',
	// 	hazards: [],
	// 	lpo: 'Shop 1/68 Leach Hwy, Melville WA 6156',
	// 	relay: 'Shop 1/68 Leach Hwy, Melville WA 6156',
	// 	// "lat": -32.04825,
	// 	// "lng": 115.79445
	// },
	// {
	// 	roundNumber: 6,
	// 	startAddress: {
	// 		address: '6 David St, Mount Pleasant WA 6153',
	// 		lat: -32.0124,
	// 		lng: 115.849,
	// 	},
	// 	lpo: {
	// 		address: '902 Canning Hwy, Applecross WA 6153',
	// 		lat: -32.0104,
	// 		lng: 115.83433,
	// 	},
	// 	relay: {
	// 		address: '902 Canning Hwy, Applecross WA 6153',
	// 		lat: -32.0104,
	// 		lng: 115.83433,
	// 	},
	// 	startAddress: '273 Preston Point Rd, Bicton WA 6157',
	// 	suburb: 'Bicton',
	// 	hazards: [],
	// 	lpo: 'Melville Plaza Shopping Centre, shop 2/380 Canning Hwy, Bicton WA 6157',
	// 	relay: 'Melville Plaza Shopping Centre, shop 2/380 Canning Hwy, Bicton WA 6157',
	// 	// "lat": -32.034046,
	// 	// "lng": 115.790915
	// },
	// {
	// 	roundNumber: 7,
	// 	startAddress: {
	// 		address: '6 David St, Mount Pleasant WA 6153',
	// 		lat: -32.0124,
	// 		lng: 115.849,
	// 	},
	// 	lpo: {
	// 		address: '902 Canning Hwy, Applecross WA 6153',
	// 		lat: -32.0104,
	// 		lng: 115.83433,
	// 	},
	// 	relay: {
	// 		address: '902 Canning Hwy, Applecross WA 6153',
	// 		lat: -32.0104,
	// 		lng: 115.83433,
	// 	},
	// 	startAddress: '50 Windsor Rd, East Fremantle WA 6158',
	// 	suburb: 'East Fremantle',
	// 	hazards: [],
	// 	lpo: 'Stammers Shopping Centre, shop 6/265-277 Canning Hwy, Palmyra WA 6157',
	// 	relay: 'Stammers Shopping Centre, shop 6/265-277 Canning Hwy, Palmyra WA 6157',
	// 	// "lat": -32.038257,
	// 	// "lng": 115.77739
	// },
	// {
	// 	roundNumber: 8,
	// 	startAddress: {
	// 		address: '6 David St, Mount Pleasant WA 6153',
	// 		lat: -32.0124,
	// 		lng: 115.849,
	// 	},
	// 	lpo: {
	// 		address: '902 Canning Hwy, Applecross WA 6153',
	// 		lat: -32.0104,
	// 		lng: 115.83433,
	// 	},
	// 	relay: {
	// 		address: '902 Canning Hwy, Applecross WA 6153',
	// 		lat: -32.0104,
	// 		lng: 115.83433,
	// 	},
	// 	startAddress: '190 Marmion St, Palmyra WA 6157',
	// 	suburb: 'Palmyra',
	// 	hazards: [],
	// 	lpo: 'Stammers Shopping Centre, shop 6/265-277 Canning Hwy, Palmyra WA 6157',
	// 	relay: 'Stammers Shopping Centre, shop 6/265-277 Canning Hwy, Palmyra WA 6157',
	// 	// "lat": -32.038257,
	// 	// "lng": 115.77739
	// },
	// {
	// 	roundNumber: 9,
	// 	startAddress: {
	// 		address: '6 David St, Mount Pleasant WA 6153',
	// 		lat: -32.0124,
	// 		lng: 115.849,
	// 	},
	// 	lpo: {
	// 		address: '902 Canning Hwy, Applecross WA 6153',
	// 		lat: -32.0104,
	// 		lng: 115.83433,
	// 	},
	// 	relay: {
	// 		address: '902 Canning Hwy, Applecross WA 6153',
	// 		lat: -32.0104,
	// 		lng: 115.83433,
	// 	},
	// 	startAddress: '1 The Terrace, Fremantle WA 6160',
	// 	suburb: 'Fremantle',
	// 	hazards: [],
	// 	lpo: '1/13 Market St, Fremantle WA 6160',
	// 	relay: '1/13 Market St, Fremantle WA 6160',
	// 	// "lat": -32.053426,
	// 	// "lng": 115.745743
	// },
	// {
	// 	roundNumber: 10,
	// 	startAddress: {
	// 		address: '6 David St, Mount Pleasant WA 6153',
	// 		lat: -32.0124,
	// 		lng: 115.849,
	// 	},
	// 	lpo: {
	// 		address: '902 Canning Hwy, Applecross WA 6153',
	// 		lat: -32.0104,
	// 		lng: 115.83433,
	// 	},
	// 	relay: {
	// 		address: '902 Canning Hwy, Applecross WA 6153',
	// 		lat: -32.0104,
	// 		lng: 115.83433,
	// 	},
	// 	startAddress: '15 Robbins Pl, Winthrop WA 6150',
	// 	suburb: 'Winthrop',
	// 	hazards: [],
	// 	lpo: 'Winthrop Shopping Centre, shop 8/109-141 Somerville Blvd, Winthrop WA 6150',
	// 	relay: 'Winthrop Shopping Centre, shop 8/109-141 Somerville Blvd, Winthrop WA 6150',
	// 	// "lat": -32.058377,
	// 	// "lng": 115.831557
	// },
];

export default roundData

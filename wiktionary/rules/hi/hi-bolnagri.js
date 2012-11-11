( function ( $ ) {
	'use strict';

	var hiBolNagri = {
		id: 'hi-bolnagri',
		name: 'बोलनागरी',
		description: 'BolNagri phonetic keymap for Devanagari script',
		date: '2012-03-28',
		URL: 'http://www.indlinux.org/wiki/index.php/BolNagri',
		author: 'G Karunakar',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 0,
		maxKeyLength: 1,
		patterns: [
			[ 'a', 'ा' ],
			[ 'b', 'ब' ],
			[ 'c', 'च' ],
			[ 'd', 'द' ],
			[ 'e', 'े' ],
			[ 'f', 'ट' ],
			[ 'g', 'ग' ],
			[ 'h', 'ह' ],
			[ 'i', 'ि' ],
			[ 'j', 'ज' ],
			[ 'k', 'क' ],
			[ 'l', 'ल' ],
			[ 'm', 'म' ],
			[ 'n', 'न' ],
			[ 'o', 'ो' ],
			[ 'p', 'प' ],
			[ 'q', '\u200C' ], // ZWNJ
			[ 'r', 'र' ],
			[ 's', 'स' ],
			[ 't', 'त' ],
			[ 'u', 'ु' ],
			[ 'v', 'ड' ],
			[ 'w', 'व' ],
			[ 'x', '्' ], // Halant
			[ 'y', 'य' ],
			[ 'z', 'श' ],
			[ 'A', 'आ' ],
			[ 'B', 'भ' ],
			[ 'C', 'छ' ],
			[ 'D', 'ध' ],
			[ 'E', 'ै' ],
			[ 'F', 'ठ' ],
			[ 'G', 'घ' ],
			[ 'H', 'ः' ], // Visarga
			[ 'I', 'ी' ],
			[ 'J', 'झ' ],
			[ 'K', 'ख' ],
			[ 'L', 'ळ' ],
			[ 'M', 'ऽ' ],
			[ 'N', 'ण' ],
			[ 'O', 'ौ' ],
			[ 'P', 'फ' ],
			[ 'Q', '\u200D' ], // ZWJ
			[ 'R', 'ृ' ],
			[ 'S', 'ष' ],
			[ 'T', 'थ' ],
			[ 'U', 'ू' ],
			[ 'V', 'ढ' ],
			[ 'W', 'ॐ' ],
			[ 'X', 'ॉ' ],
			[ 'Y', 'ञ' ],
			[ 'Z', 'ॅ' ],
			[ '\\$', '₹' ],
			[ '\\`', 'ं' ],
			[ '\\~', 'ँ' ],
			[ '\\\\', '।' ], // Danda
			[ '\\|', '॥' ],
			[ '\\.', '़' ],
			[ '\\<', '॰' ] ],

		patterns_x: [
			[ 'a', 'अ' ],
			[ 'A', 'आ' ],
			[ 'i', 'इ' ],
			[ 'I', 'ई' ],
			[ 'u', 'उ' ],
			[ 'U', 'ऊ' ], // altgr+U triggers file upload!
			[ 'e', 'ए' ],
			[ 'E', 'ऐ' ],
			[ 'o', 'ओ' ],
			[ 'O', 'औ' ],
			[ 'r', 'ऱ' ],
			[ 'R', 'ऋ' ],
			[ 'Z', 'ऍ' ],
			[ 'X', 'ऑ' ],
			[ 'l', 'ॢ' ],
			[ 'L', 'ऌ' ],
			// Dev digits
			[ '0', '०' ],
			[ '1', '१' ],
			[ '2', '२' ],
			[ '3', '३' ],
			[ '4', '४' ],
			[ '5', '५' ],
			[ '6', '६' ],
			[ '7', '७' ],
			[ '8', '८' ],
			[ '9', '९' ] ]

	};

	$.ime.register( hiBolNagri );

}( jQuery ) );

'use strict';
const expect = require('chai').expect;
const generateMessage = require('../server/generateMessage');

describe('Wittr', () => {
	it('Should generate random messages', () => {
		const randomArray = [
			{msg: 'Random1'},
			{msg: 'Random2'},
			{msg: 'Random3'},
			{msg: 'Random4'}
		];
		const message = generateMessage.pickFrom(randomArray);
		//TODO: Findout correct assertion
	});
});
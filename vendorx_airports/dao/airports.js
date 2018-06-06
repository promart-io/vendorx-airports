var daoApi = require('db/v3/dao');
var dao = daoApi.create({
	'table': 'TRAVEL_AIRPORTS',
	'properties': [
		{
			'name':  'id',
			'column': 'AIRPORT_ID',
			'type':'INTEGER',
			'id': true,
			'required': true
		},		{
			'name':  'name',
			'column': 'AIRPORT_NAME',
			'type':'VARCHAR',
			'id': false,
			'required': true
		},		{
			'name':  'city',
			'column': 'AIRPORT_CITY',
			'type':'VARCHAR',
			'id': false,
			'required': true
		},		{
			'name':  'iata_faa',
			'column': 'AIRPORT_IATA_FAA',
			'type':'CHAR',
			'id': false,
			'required': false
		},		{
			'name':  'icao',
			'column': 'AIRPORT_ICAO',
			'type':'CHAR',
			'id': false,
			'required': false
		},		{
			'name':  'latitude',
			'column': 'AIRPORT_LATITUDE',
			'type':'DOUBLE',
			'id': false,
			'required': true
		},		{
			'name':  'longitude',
			'column': 'AIRPORT_LONGITUDE',
			'type':'DOUBLE',
			'id': false,
			'required': true
		},		{
			'name':  'altitude',
			'column': 'AIRPORT_ALTITUDE',
			'type':'DOUBLE',
			'id': false,
			'required': false
		},		{
			'name':  'timezone',
			'column': 'AIRPORT_TIMEZONE',
			'type':'DOUBLE',
			'id': false,
			'required': false
		},		{
			'name':  'dst',
			'column': 'AIRPORT_DST',
			'type':'CHAR',
			'id': false,
			'required': false
		},		{
			'name':  'tz',
			'column': 'AIRPORT_TZ',
			'type':'VARCHAR',
			'id': false,
			'required': false
		}]
});

exports.list = function(settings) {
	return dao.list(settings);
};

exports.get = function(id) {
	return dao.find(id);
};

exports.create = function(entity) {
	return dao.insert(entity);
};

exports.update = function(entity) {
	return dao.update(entity);
};

exports.delete = function(id) {
	dao.remove(id);
};
  
require('dotenv').config();

const { Client } = require('@elastic/elasticsearch');

const host = process.env.E_HOST || 'http://localhost:9200'
module.exports.client = new Client({
    node :  host
});

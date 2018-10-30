const config = require('config');
const PgClient = require('pg').Client;
// const Client = require('./models').Client;

const client = new PgClient(config.get('database'));
client.connect();

const dbRequest = sql => client
  .query(sql)
  .catch(err => console.log(err.message, '\n', sql));

async function getCategories() {
  const sql =
    `SELECT * FROM "categories"
    ORDER BY "id";`;

  const categories = await dbRequest(sql) || {};
  const result = categories.rows || null;

  return result;
}

const test = async() => {
  const categories = await getCategories();
  console.dir(categories);
};

test();

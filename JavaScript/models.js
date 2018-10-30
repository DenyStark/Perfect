class Client {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.phone = row.phone;
    this.date = row.date || 'NOW()';
    this.category = row.category;
    this.categoryId = row.categoryId || 0;
    this.comment = row.comment || '';
    this.status = row.status;
    this.statusId = row.statusId || 1;
  }
}

module.exports = {
  Client
};

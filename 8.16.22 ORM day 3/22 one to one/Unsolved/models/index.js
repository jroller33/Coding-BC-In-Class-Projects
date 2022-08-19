const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // done: 
  onDelete: 'CASCADE',  // 
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// done: exports reader and library card
module.exports = { Reader, LibraryCard };

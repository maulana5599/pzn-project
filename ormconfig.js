module.exports = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'maulana',
  password: 'maulana186',
  database: 'pimdats_backup',
  synchronize: false,
  dropSchema: false,
  logging: true,
  entities: ['dist/**/*.entity.js'],
};

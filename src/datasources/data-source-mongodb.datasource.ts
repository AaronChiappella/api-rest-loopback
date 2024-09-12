import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'DataSourceMongodb',
  connector: 'mongodb',
  url: 'mongodb+srv://aaronchiappella:admin@mongoapirest.m9k7o.mongodb.net/?retryWrites=true&w=majority&appName=MongoApiRest',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: 'MongoApiRest',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DataSourceMongodbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'DataSourceMongodb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.DataSourceMongodb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

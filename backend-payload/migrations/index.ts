import * as migration_20250317_143405 from './20250317_143405';
import * as migration_20250318_131127 from './20250318_131127';
import * as migration_20250322_190451 from './20250322_190451';
import * as migration_20250325_195052 from './20250325_195052';
import * as migration_20250329_110901 from './20250329_110901';

export const migrations = [
  {
    up: migration_20250317_143405.up,
    down: migration_20250317_143405.down,
    name: '20250317_143405',
  },
  {
    up: migration_20250318_131127.up,
    down: migration_20250318_131127.down,
    name: '20250318_131127',
  },
  {
    up: migration_20250322_190451.up,
    down: migration_20250322_190451.down,
    name: '20250322_190451',
  },
  {
    up: migration_20250325_195052.up,
    down: migration_20250325_195052.down,
    name: '20250325_195052',
  },
  {
    up: migration_20250329_110901.up,
    down: migration_20250329_110901.down,
    name: '20250329_110901'
  },
];

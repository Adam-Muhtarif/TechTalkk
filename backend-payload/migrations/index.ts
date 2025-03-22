import * as migration_20250317_143405 from './20250317_143405';
import * as migration_20250318_131127 from './20250318_131127';
import * as migration_20250322_190451 from './20250322_190451';

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
    name: '20250322_190451'
  },
];

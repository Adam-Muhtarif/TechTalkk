import * as migration_20250411_210349 from './20250411_210349';

export const migrations = [
  {
    up: migration_20250411_210349.up,
    down: migration_20250411_210349.down,
    name: '20250411_210349'
  },
];

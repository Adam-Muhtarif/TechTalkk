import * as migration_20250513_083927 from './20250513_083927';
import * as migration_20250513_091849 from './20250513_091849';

export const migrations = [
  {
    up: migration_20250513_083927.up,
    down: migration_20250513_083927.down,
    name: '20250513_083927',
  },
  {
    up: migration_20250513_091849.up,
    down: migration_20250513_091849.down,
    name: '20250513_091849'
  },
];

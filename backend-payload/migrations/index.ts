import * as migration_20250410_145911 from './20250410_145911';

export const migrations = [
  {
    up: migration_20250410_145911.up,
    down: migration_20250410_145911.down,
    name: '20250410_145911'
  },
];

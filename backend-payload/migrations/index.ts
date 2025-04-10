import * as migration_20250410_201506 from './20250410_201506';

export const migrations = [
  {
    up: migration_20250410_201506.up,
    down: migration_20250410_201506.down,
    name: '20250410_201506'
  },
];

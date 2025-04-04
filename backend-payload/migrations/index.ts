import * as migration_20250404_201711 from './20250404_201711';

export const migrations = [
  {
    up: migration_20250404_201711.up,
    down: migration_20250404_201711.down,
    name: '20250404_201711'
  },
];

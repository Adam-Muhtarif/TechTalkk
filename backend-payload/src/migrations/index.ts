import * as migration_20250513_214853 from './20250513_214853';
import * as migration_20250513_230945 from './20250513_230945';

export const migrations = [
  {
    up: migration_20250513_214853.up,
    down: migration_20250513_214853.down,
    name: '20250513_214853',
  },
  {
    up: migration_20250513_230945.up,
    down: migration_20250513_230945.down,
    name: '20250513_230945'
  },
];

// eslint-disable-next-line import/no-extraneous-dependencies
import { ExpoConfig, ConfigContext } from '@expo/config';

import 'dotenv/config';

export default ({ config }: ConfigContext): Partial<ExpoConfig> => ({
  ...config,
  extra: {
    PEXELS_API_KEY: process.env.PEXELS_API_KEY,
  },
});

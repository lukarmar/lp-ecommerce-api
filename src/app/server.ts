import app from './app'
import { PORT } from '../infrastructure/@shared/config/env-manager'

import { logger } from '../infrastructure/@shared/config/logger'


app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`);
})
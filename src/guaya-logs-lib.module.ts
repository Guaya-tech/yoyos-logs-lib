import * as utils from './utils';
import { WinstonModule } from 'nest-winston';
import { Module, Logger } from '@nestjs/common';
import { GuayaLogs } from './guaya-logs-lib.service';

@Module({
  imports: [
    WinstonModule.forRoot({
      levels: { debug: 0, info: 0, error: 0 },
      transports: [utils.winstonConsoleInfo()],
    }),
  ],
  providers: [GuayaLogs, Logger],
  exports: [GuayaLogs],
})
export class GuayaLogsModule {}

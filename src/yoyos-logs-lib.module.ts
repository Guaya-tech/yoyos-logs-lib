import * as utils from './utils';
import { WinstonModule } from 'nest-winston';
import { Module, Logger } from '@nestjs/common';
import { YoyosLogs } from './yoyos-logs-lib.service';

@Module({
  imports: [
    WinstonModule.forRoot({
      levels: { debug: 0, info: 0, error: 0 },
      transports: [utils.winstonConsoleInfo()],
    }),
  ],
  providers: [YoyosLogs, Logger],
  exports: [YoyosLogs],
})
export class YoyosLogsModule {}

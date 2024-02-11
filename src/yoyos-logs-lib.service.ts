import { Injectable, Logger } from '@nestjs/common';
import { YoyosLogsSerice } from './interface/yoyos-logs.interface';

@Injectable()
export class YoyosLogs implements YoyosLogsSerice {
  constructor(private readonly logger: Logger) {}

  info(message: string | object, object?: string | object): void {
    this.logger.log(message, object);
  }
  debug(message: string | object, object?: string | object): void {
    this.logger.debug(message, object);
  }
  error(message: string | object, object?: string | object): void {
    this.logger.error(message, object);
  }
}

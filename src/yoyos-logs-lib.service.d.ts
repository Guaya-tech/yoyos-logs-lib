import { Logger } from '@nestjs/common';
import { YoyosLogsSerice } from './interface/yoyos-logs.interface';
export declare class YoyosLogs implements YoyosLogsSerice {
    private readonly logger;
    constructor(logger: Logger);
    info(message: string | object, object?: string | object): void;
    debug(message: string | object, object?: string | object): void;
    error(message: string | object, object?: string | object): void;
}

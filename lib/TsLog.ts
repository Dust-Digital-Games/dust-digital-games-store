import { appendFileSync } from 'fs';
import { Logger, ILogObj } from 'tslog';
import { join } from 'path';

interface LogObject {
  name: string;
  type: string;
  msg: string;
}

class TsLog {
  private readonly name: string;
  private readonly logger: Logger<ILogObj>;

  constructor(name: string, logger: Logger<ILogObj>) {
    this.name = name;
    this.logger = logger;
  }

  error(error: Error | string): void {
    this.logger.error(error);
  }

  info(msg: string): void {
    this.logger.info(msg);
  }
}

export default TsLog;

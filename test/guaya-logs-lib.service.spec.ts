import { GuayaLogs } from '../src';
import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

describe('Guaya Logs Service', () => {
  let guayaLogs: GuayaLogs;
  let logger: Logger;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
       GuayaLogs,
        {
          provide: Logger,
          useValue: {
            log: jest.fn(),
            debug: jest.fn(),
            error: jest.fn(),
          },
        },
      ],
    })
      .setLogger(new Logger())
      .compile();
    guayaLogs = module.get<GuayaLogs>(GuayaLogs);
    logger = module.get<Logger>(Logger);
  });

  describe('Print Logs', () => {
    it(`Given a log information with a string message,
    When the method is info 
    Then the service should be use de info method to print the information in console
    `, async () => {
      const expected = 'Info log';
      guayaLogs.info(expected);
      expect(logger.log).toHaveBeenCalledTimes(1);
      expect(logger.log).toHaveBeenCalledWith(expected, undefined);
    });

    it(`Given a log information with a string message,
    When the method is debug 
    Then the service should be use de debug method to print the information in console
    `, async () => {
      const expected = 'Debug log';
      guayaLogs.debug(expected);
      expect(logger.debug).toHaveBeenCalledTimes(1);
      expect(logger.debug).toHaveBeenCalledWith(expected, undefined);
    });

    it(`Given a log information with a string message,
    When the method is error 
    Then the service should be use de error method to print the information in console
    `, async () => {
      const expected = 'Error log';
      guayaLogs.error(expected);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(logger.error).toHaveBeenCalledWith(expected, undefined);
    });
  });
});

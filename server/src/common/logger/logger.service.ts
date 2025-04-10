// src/common/logger/logger.service.ts
import { Injectable, LoggerService as NestLoggerService } from '@nestjs/common';
import * as winston from 'winston';

// กำหนด format และ transport ของ logger
const winstonLogger = winston.createLogger({
  level: 'info', // กำหนดระดับ log
  format: winston.format.combine(
    winston.format.timestamp(), // เพิ่ม timestamp ให้กับ log
    winston.format.printf(
      (info) => `${info.timestamp} ${info.level}: ${info.message}`, // รูปแบบที่ log จะแสดง
    ),
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ), // log ไปที่คอนโซล
    }),
    new winston.transports.File({ filename: 'logs/app.log' }), // log ไปที่ไฟล์
  ],
});

export class LoggerService implements NestLoggerService {
  log(message: string) {
    winstonLogger.info(message); // ใช้ winston log
  }

  error(message: string, trace: string) {
    winstonLogger.error(message, trace);
  }

  warn(message: string) {
    winstonLogger.warn(message);
  }

  debug(message: string) {
    winstonLogger.debug(message);
  }

  verbose(message: string) {
    winstonLogger.verbose(message);
  }
}

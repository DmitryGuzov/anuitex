import { createLogger, transports,format, info } from 'winston'

export const logger = createLogger({
    transports: [
        new transports.File({
            filename: 'error.log',
            level: 'error',
            format: format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            filename: 'warn.log',
            level: 'warn',
            format: format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            filename: 'info.log',
            level: 'info',
            format: format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            filename: 'debug.log',
            level: 'debug',
            format: format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            filename: 'trace.log',
            level: 'trace',
            format: format.combine(format.timestamp(),format.json())
        }),
    ]
})
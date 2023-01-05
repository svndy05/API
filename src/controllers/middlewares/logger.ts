const { createLogger, format, transports } = require('winston')
const { timestamp } = format
import { NextFunction, Request, Response } from "express"
interface IFormat {
    level: string,
    message: string,
    timestamp: Date,
    method: string
}
const winstonLogger = createLogger({
    level: 'info',
    format: format.combine(
        format.colorize(),
        timestamp(),
        format.printf(({ level, message, timestamp, method }: IFormat) => {
            return `${level} ${timestamp} : ${method} - ${message}`;
        })
    ),
    transports: [
        new transports.Console()
    ]
})
export const loggerInfo = (req: Request, res: Response, next: NextFunction) => {
    winstonLogger.log({ level: 'info', message: `${req.headers.host}${req.url}`, method: req.method })
    next()
}
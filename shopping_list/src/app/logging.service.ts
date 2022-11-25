// @Injectable({ providedIn: 'root' })
export class LoggingService {
  lastlog: string;

  printLog(message: string): void {
    console.log('message', message);
    console.log('lastlog', this.lastlog);
    this.lastlog = message;
  }
}

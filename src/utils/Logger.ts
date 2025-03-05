export class Logger {
    static log(message: string): void {
        console.log(`[Info] ${new Date().toISOString()} - ${message}`);
    }
}
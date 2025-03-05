export class ErrorHandler {
    static handle(error: Error): void {
        console.error(`[Error] ${error.message}`);
        // Add more sophisticated error handling as needed
    }
}
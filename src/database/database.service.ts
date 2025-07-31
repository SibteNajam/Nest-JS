import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {

    private isConnected: boolean = false;


    onModuleInit() {        // Simulate database connection
        this.isConnected = true;
        console.log('Database connected');
    }

    onApplicationShutdown(signal: string) {
        // Simulate database disconnection
        this.isConnected = false;
        console.log(`Database disconnected due to ${signal}`);
    }
    //not a lifecycle hook but a method to check connection status
    // this method can be used in any controller to check connection status
    getStatus() {
        return this.isConnected ? 'Database is connected' : 'Database is disconnected';
    }
}

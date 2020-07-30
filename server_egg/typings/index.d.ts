declare module 'egg' {
    interface Application {
        mysql: any;
        redis: any;
        passport: any;
        middleware: any;
        io: any;
    }
}

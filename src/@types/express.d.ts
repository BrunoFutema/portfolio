declare namespace Express {
  declare namespace Multer {
    export interface File {
      key: string;
      location: string;
    }
  }

  export interface Request {
    io: any;
    connectedUsers: any;
    user: {
      id: string;
      isTeacher: boolean;
    };
    file: Multer.File;
  }
}

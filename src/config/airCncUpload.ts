import multer from 'multer';
import path from 'path';

const airCncFolder = path.resolve(
  __dirname,
  '..',
  '..',
  'tmp',
  'air-cnc-uploads',
);

export default {
  airCncFolder,
  storage: multer.diskStorage({
    destination: airCncFolder,
    filename(request, file, callback) {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);

      callback(null, `${name}-${Date.now()}${ext}`);
    },
  }),
};

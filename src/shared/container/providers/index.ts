import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/IStorageProvider';
import S3StorageProvider from './StorageProvider/implementations/S3StorageProvider';

const providers = {
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>('StorageProvider', providers.s3);

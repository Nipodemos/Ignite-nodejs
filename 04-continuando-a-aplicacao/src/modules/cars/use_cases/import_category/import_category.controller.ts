import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ImportCategoryUseCase from './import_category.usecase';

export default class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
    console.log('file :>> ', file);
    if (file) {
      await importCategoryUseCase.execute(file);
    }
    return response.send();
  }
}

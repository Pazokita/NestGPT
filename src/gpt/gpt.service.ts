import { Body, Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases/orthography.use-case';

@Injectable()
export class GptService {

  async orthographyCheck(
    @Body() body:any
  ) {
    return await orthographyCheckUseCase();
  }
}

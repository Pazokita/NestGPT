import { Body, Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases/orthography.use-case';
import { OrthographyDto } from './dto/orthography.dto';
import OpenAI from 'openai';
import { prosConsDicusserUseCase } from './use-cases/pros-cons-discusser.use-case';
import { prosConsDicusserStreamUseCase } from './use-cases/pros-cons-stream.use-case';
import { ProsConsDiscusserDto } from './dto/pros-cons-discusser.dto';

@Injectable()
export class GptService {

  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })

  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await orthographyCheckUseCase( this.openai, {
      prompt: orthographyDto.prompt
    });
  }

  async prosConsDicusser({ prompt }: ProsConsDiscusserDto ) {
    return await prosConsDicusserUseCase(this.openai, { prompt });
  }

  async prosConsDicusserStream({ prompt }: ProsConsDiscusserDto ) {
    return await prosConsDicusserStreamUseCase(this.openai, { prompt });
  }
}

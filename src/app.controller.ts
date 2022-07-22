import { Controller, Get } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { GenPdfService } from './gen-pdf/gen-pdf.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/pdf')
  async getIPdf(): Promise<void> {
    // ...

    const buffer = await GenPdfService.generatePDF();
    console.log(buffer);
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenPdfService } from './gen-pdf/gen-pdf.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GenPdfService],
})
export class AppModule {}

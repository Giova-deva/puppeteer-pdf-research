import { Injectable } from '@nestjs/common/decorators';
import path from 'path';
import * as fs from 'node:fs';
import * as puppeteer from 'puppeteer';
import { v4 as uuidv4 } from 'uuid'
@Injectable()
export class GenPdfService {
  static async generatePDF(): Promise<Buffer> {
    // const content = fs.readFileSync(
    //   path.resolve(__dirname, './templates/invoice.html'),
    //   'utf-8',
    // );

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://autofact-e77d8.web.app/', {
      waitUntil: 'networkidle0',
    });
    // await page.goto('https://ldzuv.csb.app/', {
    //   waitUntil: 'networkidle0',
    // });
    // await page.setContent(content);

    await page.emulateMediaType('screen');
    const idPdf = uuidv4();
    const buffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '50px',
        bottom: '50px',
        left: '50px',
      },
      path: `C:\\Users\\ferle\\OneDrive\\Escritorio\\Workspaces\\pdftest\\pdfs/web${idPdf}.pdf`,
    });

    await browser.close();

    return buffer;
  }
}

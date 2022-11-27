// Controllers Create Endpoints
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common'
import { ReportType, data } from 'src/data'
import { AppService } from './app.service'

// The controller
// Sets the crud path of your request, either in the controller of the method
@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.getAllReports(reportType)
  }
  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.getReportById(reportType, id)
  }
  @Post()
  createReport(
    @Body() { amount, source }: { amount: number; source: string },
    @Param('type') type: 'income' | 'expense',
  ) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.createReport(reportType, { amount, source })
  }
  @Put(':id')
  updateReport(
    @Param('type') type: string,
    @Param('id') id: string,
    @Body() body: { amount: number; source: string },
  ) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.updateReport(reportType, id, body)
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id') id: string) {
    return this.appService.deleteReport(id)
  }
}

// Controllers Create Endpoints
import { ReportResponseDto } from 'src/dto/report.dto'
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  ParseUUIDPipe,
  ParseEnumPipe,
} from '@nestjs/common'
import { ReportType } from 'src/data'
import { CreatReportDto, UpdateReportDto } from 'src/dto/report.dto'
import { ReportService } from './report.service'

// The controller
// Sets the crud path of your request, either in the controller of the method
@Controller('report/:type')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  getAllReports(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ): ReportResponseDto[] {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.getAllReports(reportType)
  }
  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponseDto {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.getReportById(reportType, id)
  }
  @Post()
  createReport(
    @Body() { amount, source }: CreatReportDto,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.createReport(reportType, { amount, source })
  }
  @Put(':id')
  updateReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateReportDto,
  ): ReportResponseDto {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.updateReport(reportType, id, body)
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string) {
    return this.reportService.deleteReport(id)
  }
}

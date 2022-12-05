import { Module } from '@nestjs/common'
import { ReportModule } from 'src/report/report.module'
import { SummaryController } from './summary.controller'
import { SummaryService } from './summary.service'

@Module({
  // Imports module for use in module
  imports: [ReportModule],
  controllers: [SummaryController],
  providers: [SummaryService],
})
export class SummaryModule {}

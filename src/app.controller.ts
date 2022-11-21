import { Controller, Get, Post, Put, Delete } from '@nestjs/common'

// The controller
// Sets the crud path of your request, either in the controller of the method
@Controller('report/:type')
export class AppController {
  @Get()
  getAllIncomeReports() {
    return []
  }
  @Get(':id')
  getIncomeReportById() {
    return {}
  }
  @Post()
  createReport() {
    return {}
  }
  @Put(':id')
  editReport() {
    return {}
  }
  @Delete(':id')
  deleteReport() {
    return {}
  }
}

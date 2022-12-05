import { ReportModule } from './report/report.module'
import { SummaryModule } from './summary/summary.module'
// Adding and managing dependencies
import { ClassSerializerInterceptor, Module } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { AppController } from './app.controller'
import { AppService } from './app.service'
// CustomInterceptor Example usage
// import { CustomInterceptor } from './custom.interceptor'

@Module({
  imports: [SummaryModule, ReportModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      // Intercepts requests
      // before sending the response to the client
      // looks at the dto and send to the client with the modified response
      useClass: ClassSerializerInterceptor,
      // Customer Interceptor example
      // useClass: CustomInterceptor
    },
  ],
})
export class AppModule {}

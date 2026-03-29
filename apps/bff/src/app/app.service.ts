import { Injectable } from '@nestjs/common';
import { MICROSERVICE_NAME } from "@common/constants/common.constant"

@Injectable()
export class AppService {
  getData(): { message: string } {
    console.log('MICROSERVICE_NAME', MICROSERVICE_NAME)
    return { message: 'Hello API' };
  }
}

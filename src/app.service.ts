import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hi World!';
  }
}

@Injectable()
export class Appservice {
  getHi(): string {
    return 'Henloo World';
  }
}

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  constructor(private configService: ConfigService) {}

  getvalue(key: string | Array<string>) {
    const response = {};
    if (typeof key === 'string') {
      return this.configService.get(key);
    }

    if (Array.isArray(key)) {
      return key.map((configName) => {
        response[configName] = this.configService.get(configName);
      });
    }
  }
}

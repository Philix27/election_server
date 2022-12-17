import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  constructor(private configService: ConfigService) {}

  getvalue(name: string | Array<string>) {
    const response = {};
    if (typeof name === 'string') {
      return (response[name] = this.configService.get(name));
    }

    if (Array.isArray(name)) {
      return name.map((configName) => {
        response[configName] = this.configService.get(configName);
      });
    }
  }
}

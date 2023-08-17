import { Controller, Post, Body } from '@nestjs/common';
import { SenduseropService } from './senduserop.service';  

@Controller('senduserop')
export class SenduseropController {
  constructor(private readonly sendUserOPService: SenduseropService) {}  

  @Post('senduserop')
  async sendUserOP(@Body('walletAddress') walletAddress: string): Promise<any> {
      try {
          await this.sendUserOPService.runScript(walletAddress);
          return { message: 'Script executed successfully' };
      } catch (error) {
          throw new Error(`Failed to execute SendUserOP script: ${error.message}`);
      }
  }
}

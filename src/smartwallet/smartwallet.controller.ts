import { Controller, Post, Body, Response } from '@nestjs/common';
import { SmartwalletService } from "../smartwallet/smartwallet.service";


// import {script} from "../../../enviormentKeywise/scripts/deploy.ts"

@Controller('smartwallet')
export class SmartwalletController {
  constructor(private readonly smartwalletService: SmartwalletService) {} // Note the corrected capitalization

  @Post('run')
  async runHardhatScript(
    @Body('param1') param1: string,
    ): Promise<string> {
    
    return await this.smartwalletService.runScript(param1);
  }
}
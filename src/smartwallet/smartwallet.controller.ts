import { Controller, Post, Body } from '@nestjs/common';
import { SmartwalletService } from "../smartwallet/smartwallet.service";

// import {script} from "../../../enviormentKeywise/scripts/deploy.ts"

@Controller('smartwallet')
export class SmartwalletController {
  constructor(private readonly smartwalletService: SmartwalletService) {} // Note the corrected capitalization

  @Post('run')
  async runHardhatScript(
    @Body('param1') param1: string,
    @Body('param2') param2: string,
    @Body('param3') param3: string,
    @Body('param4') param4: string,
  ): Promise<string> {
    return await this.smartwalletService.runScript(param1, param2, param3, param4);
  }
}
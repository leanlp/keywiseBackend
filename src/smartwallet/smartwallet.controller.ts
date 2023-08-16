import { Controller, Post, Body, Response } from '@nestjs/common';
import { SmartwalletService } from "../smartwallet/smartwallet.service";


// import {script} from "../../../enviormentKeywise/scripts/deploy.ts"

@Controller('smartwallet')
export class SmartwalletController {
  constructor(private readonly smartwalletService: SmartwalletService) {} 

  @Post('run')
  async runHardhatScript(
    @Body('param1') param1: string,
    ): Promise<string> {
    
      const walletAddress = await this.smartwalletService.runScript(param1);
      console.log(walletAddress)







    return await this.smartwalletService.runScript(param1)  } catch (error: { message: any; }) {
      
      throw new Error(`Failed to run scripts: ${error.message}`);
  };

  }


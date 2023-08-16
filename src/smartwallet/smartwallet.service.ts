import { Injectable, Response } from '@nestjs/common';
import { exec } from 'child_process';
import { response } from 'express';

@Injectable()
export class SmartwalletService {
    runScript(param1: string): Promise<string> {
        return new Promise((resolve, reject) => {
          const command = `npx hardhat run --network matic scripts/deploy.ts`;

          // Set the working directory to your Hardhat project root
          const options = {
            cwd: '/home/oem/JOBS/keywise/enviormentKeywiseSendUserOp'      //in aws need to change to path nodeprocess
          };

          exec(command, options, async (error, stdout, stderr) => {
            if (error) {
              reject(`exec error: ${error}`);
              return;
            }
            resolve(stdout);
            console.log("wallet", stdout);
          });
        });
    }
}



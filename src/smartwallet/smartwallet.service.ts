import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';

@Injectable()
export class SmartwalletService {
    runScript(param1: string, param2: string, param3: string, param4: string): Promise<string> {
        return new Promise((resolve, reject) => {
          const command = `npx hardhat run --network matic scripts/deploy.ts`;

          // Set the working directory to your Hardhat project root
          const options = {
            cwd: '/home/oem/JOBS/keywise/enviormentKeywise'
          };

          exec(command, options, (error, stdout, stderr) => {
            if (error) {
              reject(`exec error: ${error}`);
              return;
            }
            resolve(stdout);
          });
        });
    }
}



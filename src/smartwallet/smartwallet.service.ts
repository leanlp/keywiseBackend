import { Injectable, Response } from '@nestjs/common';
import { exec } from 'child_process';


@Injectable()
export class SmartwalletService {
    runScript(param1: string): Promise<string> {
        return new Promise((resolve, reject) => {
          const command = `npx hardhat run --network matic scripts/deploy.ts`;
          const options = {
            cwd: '/home/oem/JOBS/keywise/enviormentKeywiseSendUserOp'
          };

          exec(command, options, async (error, stdout, stderr) => {
            if (error) {
              reject(`exec error: ${error}`);
              return;
            }

            const walletAddress = stdout.trim();
            console.log("wallet", walletAddress);

            this.executeSendUserOPScript(walletAddress)
              .then(result => resolve(result))
              .catch(err => reject(err));
          });
        });
    }

    executeSendUserOPScript(walletAddress: string): Promise<string> {
      return new Promise((resolve, reject) => {
        const command = `npx hardhat run --network matic scripts/sendUserOPPaymasterKeywise.cjs`;
        const options = {
          cwd: '/home/oem/JOBS/keywise/enviormentKeywiseSendUserOp'
        };

        exec(command, options, (error, stdout, stderr) => {
          if (error) {
            reject(`exec error: ${error}`);
            return;
          }
          
          console.log("Output from sendUserOPPaymasterKeywise.cjs script:", stdout);
          resolve(stdout);
        });
      });
    }
}

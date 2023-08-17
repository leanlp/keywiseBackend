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
console.log(param1)
          exec(command, options, async (error, stdout, stderr) => {
            if (error) {
              reject(`exec error: ${error}`);
              return;
            }

            const extractedWalletAddress = stdout.replace("Received Wallet Address: ", "").trim();
            console.log("Extracted wallet address:", extractedWalletAddress);
            resolve(extractedWalletAddress);
            setTimeout(() => {
            this.executeSendUserOPScript(extractedWalletAddress)
              .then(result => resolve(result))
              .catch(err => reject(err));
            }, 10000);
          });
        });
    }

    executeSendUserOPScript(extractedWalletAddress: any): Promise<string> {
      return new Promise((resolve, reject) => {
        const command = `node scripts/sendUserOPPaymasterKeywise.cjs ${extractedWalletAddress}`;
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
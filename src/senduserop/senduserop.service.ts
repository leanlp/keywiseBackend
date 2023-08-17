import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';

@Injectable()
export class SenduseropService {
    runScript(walletAddress: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const command = `node scripts/sendUserOPPaymasterKeywise.cjs ${walletAddress}`;
            const options = {
                cwd: '/home/oem/JOBS/keywise/enviormentKeywiseSendUserOp'
            };

            exec(command, options, (error, stdout, stderr) => {
                if (error) {
                    reject(`exec error: ${error}`);
                    return;
                }

                console.log("Output:", stdout);
                resolve(stdout);
            });
        });
    }
}

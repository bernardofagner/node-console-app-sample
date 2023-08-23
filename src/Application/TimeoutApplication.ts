import { ITimeoutApplication } from "../ApplicationCore/ITimeoutApplication";

export class TimeoutAplication implements ITimeoutApplication {
    public async Execute(): Promise<void> {
        const tempo = 5000;

        await this.sleep(tempo); //Implementação de timeout sincrono
        console.log(`fez o sleep: ${tempo}`);
    }

    private async sleep(ms: number): Promise<void> {
        console.log('sleepping...')
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
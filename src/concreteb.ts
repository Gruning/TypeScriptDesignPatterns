import { IDepB } from "./idepb"

export class ConcreteB implements IDepB{
    doB(): void {
        console.log('doing b')
        
    }
}
import { injectable } from 'inversify'
import {IDepA} from './idepa'
import {injectable} from 'inversify'
@injectable()
export class ConcreteA implements IDepA{
    doA(): void {
        console.log("doing a")
        
    }

}
import { iDepC, IDepC } from './idepc'
import { IDepB } from './idepb'
import { IDepA } from './idepa'

export class ConcreteC implements iDepC {
    constructor(private _depA: IDepA, private _depB:IDepB){

    }
    doC()
}
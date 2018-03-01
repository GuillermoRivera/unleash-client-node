import { EventEmitter } from 'events';
import { FeatureInterface } from '../feature';

export abstract class Repository extends EventEmitter implements EventEmitter {
    constructor() {
        super();
    }

    abstract getToggle(name: string): FeatureInterface;
    abstract stop(): void;
}

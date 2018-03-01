import { EventEmitter } from 'events';
import { FeaturesInterface } from '../features';
import { FeatureInterface } from '../feature';
import { Repository } from './repository';

export interface ObjectRepositoryOptions {
    features: FeaturesInterface;
}

export class ObjectRepository extends Repository {
    private spec: FeaturesInterface;
    private features: object;

    constructor({ features: spec }: ObjectRepositoryOptions) {
        super();

        if (!spec) {
            throw new Error('Features are missing');
        }

        this.spec = spec;
        this.features = spec.features.reduce((a, b) => {
            a[b.name] = b;
            return a;
        }, {});

        process.nextTick(() => {
            this.emit('ready');
        });
    }

    getToggle(name: string): FeatureInterface {
        return this.features[name];
    }

    stop(): void {}
}

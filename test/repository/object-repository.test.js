import test from 'ava';

import { ObjectRepository } from '../../lib/repository/index';

const features = {
    version: '2',
    features: [
        {
            name: 'foo',
            enabled: true,
            strategies: [],
            variants: [],
        },
    ],
};

test('should error if no proper features are sent', t => {
    t.throws(() => new ObjectRepository({}));
    t.throws(() => new ObjectRepository({ features: [] }));
    t.throws(() => new ObjectRepository({ features: [{ name: 'foo' }] }));
});

test('resolves to the proper toggle', t => {
    t.truthy(new ObjectRepository({ features }).getToggle('foo'));
});

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
        {
            name: 'bar',
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

test('resolves all the toggles', t => {
    const toggles = new ObjectRepository({ features }).getToggles();
    t.truthy(toggles);
    t.true(toggles.length === 2);
    t.true(toggles[0].name === 'foo');
    t.true(toggles[1].name === 'bar');
});

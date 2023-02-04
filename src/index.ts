import { b } from '@core';
import { c } from '@core/test';
import { a } from '@/module';

import '@/styles/global.scss';

console.log('hi!');
console.log(a);
console.log(b);
console.log(c);

const asyncTest = async () => Promise.resolve('hihihi!');

asyncTest().then((res) => console.log(res));

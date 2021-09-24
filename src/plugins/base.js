// Automatically loads and bootstraps files
// in the "./src/components/base" folder.

// Imports
import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const requireComponent = require.context('@/components/base', true, /\.vue$/);
console.log('loading bases');
for (const file of requireComponent.keys()) {
    const componentConfig = requireComponent(file);
    const name = file
        .replace(/index.js/, '')
        .replace(/^\.\//, '')
        .replace(/\.\w+$/, '');
    const componentName = upperFirst(camelCase(name));
    console.log(componentName);

    Vue.component(
        `Base${componentName}`,
        componentConfig.default || componentConfig
    );
}

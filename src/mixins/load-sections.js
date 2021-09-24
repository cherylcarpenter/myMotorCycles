// Utilities
import { camelCase, upperFirst } from 'lodash';

export default function (sections = []) {
    return {
        name: 'LoadSections',

        // Iterates the provide list of components
        // and returns a function that returns a
        // Promise.
        components: sections.reduce((acc, cur) => {
            const name = upperFirst(camelCase(cur));
            console.log(name);
            acc[`Section${name}`] = () =>
                import(`@/views/sections/${name}.vue`);
            return acc;
        }, {}),

        data: () => ({
            sections,
        }),
    };
}
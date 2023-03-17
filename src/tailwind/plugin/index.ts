import plugin from 'tailwindcss/plugin';
import cssClasses from "../../config/css-classes";

export default plugin(
    function() {
        console.log('This is my plugin!!!!')
    },
    {
        safelist: createSafeList(),
    }
)

function createSafeList () {
    console.log(cssClasses);

    return [];
}

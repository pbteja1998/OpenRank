let _ = require('underscore');
_.mixin(require('underscore.deepclone'));

const myPluginWithSnapshot = store => {
    let prevState = _.deepClone(store.state);
    store.subscribe((mutation, state) => {
        let nextState = _.deepClone(state);

        console.log("PREV STATE", prevState);
        console.log("MUTATION", mutation);
        console.log("NEXT STATE", nextState);
        console.log("");

        // save state for next mutation
        prevState = nextState;
    })
};

export default myPluginWithSnapshot;
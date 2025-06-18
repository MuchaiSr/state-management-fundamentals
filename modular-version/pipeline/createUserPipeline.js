export default function createUserPipeline (reducerMap) {
    return function userReducerDispatch (users, actions) {
        return actions.reduce((acc, action) => {
            const reducer = reducerMap[action.type];  
            if (!reducer) return acc; 
            
            return acc.map((object) => {
                if (action.id !== undefined && object.id !== action.id) return object;

                const before = JSON.stringify(object);
                const results = reducer(object, action);
                const after = JSON.stringify(results);

                console.log(`\n${[action.type]}`);
                console.log(`${object.name}`);
                console.log(`Before: ${before}`);
                console.log(`After: ${after}`);

                return results;
            });
        }, users);
    }
}
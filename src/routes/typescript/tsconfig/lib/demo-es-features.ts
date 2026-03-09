async function getAwaitedResult<T>(promise: Promise<T>) {
    return await promise;
}

function convertSetToArray<T>(set: Set<T>) {
    return Array.from(set);
}

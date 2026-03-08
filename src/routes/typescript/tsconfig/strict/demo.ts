class User {
    // strictPropertyInitialization:
    // поле объявлено, но в constructor не инициализируется
    name: string;

    constructor() {}
}

const user = new User();
//==================================================================
// noImplicitAny:
// параметр user без явного типа получает ошибку implicit any
function greet(user) {
    return `Hello, ${user.name.toUpperCase()}`;
}

console.log(greet(user));
//==================================================================
// strictNullChecks:
// value может быть null, поэтому обращаться к length небезопасно
function printLength(value: string | null) {
    console.log(value.length);
}

printLength(null);

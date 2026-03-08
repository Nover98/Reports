**noUncheckedIndexedAccess** - если true, то заставляет тс воспринимать необъявленные поля в индексной сигнатуре как `undefined`, даже если её структура заранее определна.

Например если у нас есть интерфейс
```ts
interface EnvironmentVars {
    NAME: string;
    OS: string;
    [propName: string]: string;
}
```

то при присвоении типа `const nodeEnv = env.NODE_ENV;`
тс будет воспринимать `nodeEnv` как строку, потому что всё что бы не лежало в `EnvironmentVars` и по ключу, и по значению будет строкой.

Но при `noUncheckedIndexedAccess: true`, в `const nodeEnv = env.NODE_ENV;` тс будет воспринимать `nodeEnv` как `string | undefined`. 

По сути это настройка просто даёт более строгую типизацию.
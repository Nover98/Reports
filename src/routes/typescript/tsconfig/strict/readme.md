**strict** — это общий флаг, который включает набор самых важных строгих проверок типов.

То есть `strict: true` — это не одна проверка, а сразу несколько правил, которые делают TypeScript заметно более требовательным к коду.

На практике этот флаг помогает раньше ловить вещи вроде:

- неявного `any`
- возможного `null` или `undefined`
- неинициализированных полей класса
- небезопасных преобразований типов

`strict` удобно воспринимать как режим: «пусть TypeScript проверяет код максимально строго».

## Что важно понимать

`strict` не меняет JavaScript, в который компилируется код. Он влияет именно на строгость проверки типов.

Список опций, который включает этот флаг:

- alwaysStrict
- strictNullChecks
- strictBindCallApply
- strictBuiltinIteratorReturn
- strictFunctionTypes
- strictPropertyInitialization
- noImplicitAny
- noImplicitThis
- useUnknownInCatchVariables
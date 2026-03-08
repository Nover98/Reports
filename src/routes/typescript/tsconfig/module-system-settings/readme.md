Настройки, которые описывают какой модульный мир будет использоваться в проекте (старый CommonJS, современный ESM в Node.js или ESM через bundler) связаны между собой, если сочетать их неправильно TypeScript может:
- ругаться на конфиг,
- не находить импорты,
- или странно вести себя с ESM/CommonJS
- даже писать, что не нашёл какой-то пакет в node_modules (например undici-types)

После смены одной из этих настроек стоит проверить остальные. В некоторых случаях TS Server сразу подчеркнёт несовместимые настройки, а в некоторых не подчеркнёт, но при попытке компиляции, в консоли будут ошибки.

## Какие настройки здесь связаны

- `module` — в каком модульном формате будет итоговый JavaScript
- `moduleResolution` — по каким правилам искать импорты
- `target` — в какую версию JavaScript компилировать код
- `package.json -> type` — считать ли `.js`-файлы ESM или CommonJS

## Как они конфликтуют

Обычно конфликт выглядит так:

- `module` говорит: «это современный ESM»
- `moduleResolution` пытается искать зависимости по старым правилам
- или `package.json` говорит одно, а TypeScript-компилятор ожидает другое

Из-за этого можно получить ошибки в импортах, требования дописать `.js` в пути или проблемы с пакетами из `node_modules`.

## Примеры неудачных сочетаний

### 1. Современный `module`, но старый `moduleResolution`

```json
{
	"compilerOptions": {
		"module": "ESNext",
		"moduleResolution": "node10"
	}
}
```

Такой конфиг может плохо работать с современными ESM-пакетами, `exports` и импортами из `node_modules`.

### 2. `moduleResolution: "bundler"` вместе со старым CommonJS-миром

```json
{
	"compilerOptions": {
		"module": "CommonJS",
		"moduleResolution": "bundler"
	}
}
```

`bundler` рассчитан на современный ESM-сценарий со сборщиком, поэтому с `CommonJS` это плохая комбинация. `CommonJS` часто работает в рантейме без сборки вообще.

### 3. `nodenext` без учёта ESM-правил Node.js

```json
{
	"compilerOptions": {
		"module": "NodeNext",
		"moduleResolution": "NodeNext"
	}
}
```
 
Если при этом проект работает как ESM, TypeScript начнёт требовать явные расширения в относительных импортах, например `./math.js` вместо `./math`.

### 4. `package.json` и `module` описывают разный мир

Если в `package.json` стоит:

```json
{
	"type": "module"
}
```

а в `tsconfig` при этом выбран старый CommonJS-подход, поведение импортов и output может стать запутанным.

## Практическое правило

- для старого Node/CommonJS обычно смотрят в сторону `module: "CommonJS"`
- для современного Node ESM — `module: "NodeNext"` и `moduleResolution: "NodeNext"`
- для Vite/Webpack/esbuild — часто `module: "ESNext"` и `moduleResolution: "bundler"`
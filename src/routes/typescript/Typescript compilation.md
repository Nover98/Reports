Не смотря на большое количество настроек в tsconfig.json, которые очень похожи на настройки бандлера, типа moduleResolution, esModuleInterop, module, resolveJsonModule, verbatimModuleSyntax, sourceMap и так далее, на самом деле Typescript бандлером не является. Он компилирует/транспилирует .ts/.tsx → .js (+ опционально .d.ts, sourcemaps), но не “упаковывает зависимости” и не склеивает проект в один файл как Vite/Rollup/Webpack.

Настройки в tsconfig про модули в основном управляют:
- каким форматом модулей будет выходной JS (compilerOptions.module: esnext, commonjs, amd, …),
- как резолвятся импорты при проверке типов (moduleResolution, baseUrl, paths, и т.п.),
- и небольшой “interop” между ESM/CJS на уровне типов и эмита (в частности esModuleInterop).

TypeScript может переписать синтаксис импортов/экспортов под выбранный module, но он не превратит это в один бандл и не подтянет npm-пакеты в браузерный формат.


Важное исключение (редкое)

Есть compilerOptions.outFile, который “собирает в один файл”, но он работает ограниченно и исторически (в основном для module: "amd" или module: "system"). Для ESM/CommonJS это не тот “бандлинг”, который обычно нужен фронтенду.
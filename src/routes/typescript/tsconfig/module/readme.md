**module** - определяет формат модулей в итоговом JavaScript и то, как компилятор преобразует модульный синтаксис. 

Чаще всего TypeScript берет ESM-синтаксис import/export и:
либо оставляет его как есть при module: esnext|nodenext,
либо преобразует в require/module.exports при module: commonjs.
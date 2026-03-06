**tsconfig.json**

The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. 
Когда ты запускаешь команду tsc (которая запускает компилятор) без входных файлов перечисленных в параметрах напрямую, первым делом программа ищет tsconfig.json. Сначала ищет в текущей папки а затем начинает искать в родительских вверх по цепочке пока не дойдёт до корня диска. Если не нашёл, будут настройки по умолчанию.
When input files are specified on the command line, tsconfig.json files are ignored.

**target** - определяет в какую версию javascript превратится typescript.

`target` связан как минимум с `moduleResolution`. Если попытаться указать новые версии жс, но не указать `moduleResolution` bundler или nodenext, то тс начнёт выкидывать ошибки. А если попыаться указать `moduleResolution` nodenext, то тс потребует дополнительно указать настройку `module` тоже с nodenext.
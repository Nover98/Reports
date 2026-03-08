import { User } from "./type-only-file";
const user = {
    name: "Mykhailo",
};
console.log(user.name);
// С verbatimModuleSyntax: false TypeScript может удалить этот import из JS,
// потому что User используется только как тип.
// С verbatimModuleSyntax: true import останется как есть,
// пока ты явно не напишешь import type.

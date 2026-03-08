const user = {
    name: "Mykhailo",
};
console.log(user.name);
export {};
// С verbatimModuleSyntax: false TypeScript может удалить этот import из JS,
// потому что User используется только как тип.
// С verbatimModuleSyntax: true import останется как есть,
// пока ты явно не напишешь import type.

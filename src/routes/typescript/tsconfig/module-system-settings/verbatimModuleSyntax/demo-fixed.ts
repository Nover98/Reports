import type { User } from "./type-only-file";

const user: User = {
    name: "Mykhailo",
};

console.log(user.name);

// Здесь import type будет удалён из JS,
// потому что TypeScript точно знает, что он нужен только для типов.

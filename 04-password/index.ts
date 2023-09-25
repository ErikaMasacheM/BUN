const password = '123456';

const hash = await Bun.password.hash(password);

const isMatch = await Bun.password.verify(password, hash);

console.log({
    password: password,
    hash: hash,
    isMatch: isMatch
});

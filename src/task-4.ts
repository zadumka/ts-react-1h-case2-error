"function printUserInfo(name: string, age: number, email: string): void {
  console.log(""Name:"", name);
  console.log(""Age:"", age);
  console.log(""Email:"", email.toLowerCase()); // якщо email не передано, буде помилка
}"

printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");

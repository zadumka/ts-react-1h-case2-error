function getMessage(): string {
  return new Promise((resolve) => {
    resolve("Hello from TS");
  });
}

getMessage().then((result) => console.log(result));

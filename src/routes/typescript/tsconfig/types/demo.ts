process.stdin.on("data", (userInput) => {
    const input = userInput.toString().trim();

    console.log("user sent: " + input);
});

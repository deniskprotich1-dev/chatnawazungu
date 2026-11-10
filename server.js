const express = require("express");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>ChatNaWazungu</title>
      <style>
        body { font-family: Arial; background: #f3f6fb; text-align: center; padding: 35px 15px; }
        main { background: white; max-width: 500px; margin: auto; padding: 25px; border-radius: 15px; }
        h1 { color: #174ea6; }
        p { line-height: 1.6; }
      </style>
    </head>
    <body>
      <main>
        <h1>ChatNaWazungu</h1>
        <h2>Learn languages. Discover cultures.</h2>
        <p>Join a respectful, supervised community to practise languages and learn about different cultures.</p>
        <p>No registration fees, paid private chats, or promises of earnings.</p>
        <h3>Community rules</h3>
        <p>Respect others. Protect your personal information. Report inappropriate behaviour.</p>
      </main>
    </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("ChatNaWazungu is running");
});

const { x } = require("./lib/parser");
const { upload } = require("./lib/firebase");
const { parse } = require("./lib/process");

x("https://vexforum.com/", "#conversations ul.conversationList li:not(.viewMore)", [{
    title: ".title a | trim",
    channel: "a.channel",
    id: "@id | slice:1",
    author: {
        name: x(".title a@href", "#conversationPosts li .post .postContent h3 a"),
        avatar: x(".title a@href", "#conversationPosts li .post .avatar img@src"),
        id: x(".title a@href", "#conversationPosts li .post@data-memberid")
    },
    permalink: ".title a@href",
    posts:  x(".title a@href", ["#conversationPosts li@html"])
}])(async threads => {
    console.log(threads);
    await upload(
        await Promise.all(threads.map(t => parse(t)))
    )
    console.log("Saved results in firebase");
});
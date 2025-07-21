let userData = new Promise((resolve, reject) => {
    console.log("Fetching user profile from database...");
    setTimeout(() => {
        const user = {
            id: 1,
            name: "Alton Hudson",
            age: 38,
            email: "alton@hotmail.com"
        };
        resolve(user);
    }, 2000)
})

let userCommments = new Promise((resolve, reject) => {
    console.log("Fetching user comments from thread...");
    setTimeout(() => {
        const userComments = [
            "I did not like that!",
            "That was the best video I've ever seen",
            "I wonder how they got the dog to speak?"
        ];
        resolve(userComments);
    }, 3000)
});

let userPost = new Promise((resolve, reject) => {
    console.log("Fetching user post from video...");
    setTimeout(() => {
        const post = {
            user: "Alton Hudson",
            content: "Can't beleive I saw a talking dog in a YouTube video!!"
        };
        resolve(post);
    }, 4000);

})

userData
.then(profile => {
    console.log("Age:", profile.age);
    return userData

}).then(profile => {
    console.log("Email:", profile.email);
    return userData

}).catch(error => {
    console.error("Error:", error);
})


userCommments
    .then(comments => {
        console.log("Comments from users have loaded.");
        return userCommments

    }).then(comments => {
        console.log("Comments:");
        comments.forEach(comment => {
            console.log("- " + comment);
            return userCommments
        })
    }).catch(error => {
        console.error("Error:", error);
    })

userPost
    .then(post => {
        console.log("User post is now viewable.");
        console.log("Posted by:", post.user);
        console.log("Content:", post.content);
        return userPost

    }).catch(error => {
        console.error("Error:", error);
    })
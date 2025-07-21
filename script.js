function getUserData () {
    return new Promise((resolve, reject) => {
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
}
    

function getUserComments () {
    return  new Promise((resolve, reject) => {
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
}

function getUserPost () {
    return new Promise((resolve,reject) => {
    console.log("Fetching user post from video...");
    setTimeout(() => {
        const post = {
            user: "Alton Hudson",
            content: "Can't beleive I saw a talking dog in a YouTube video!!"
        };
        resolve(post);
    }, 4000);
    
})
}

getUserData()
    .then(profile => {
        console.log("User profile received:");
        console.log("Name:", profile.name);
        console.log("Age:", profile.age);
        console.log("Email:", profile.email);
        return getUserComments();
    }) 
    .then(comments => {
        console.log("User Comments received:");
        comments.forEach(c => console.log("- " + c))
        return getUserPost()
    })     
    .then (post => {
        console.log("User post received:");
        console.log("Posted by:", post.user);
        console.log("Content:", post.content);
    })
    .catch(error => {
        console.error("Error:", error)
    });
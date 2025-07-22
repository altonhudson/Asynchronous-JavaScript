
function getUserData() {
    return new Promise((resolve, reject) => {
        console.log("Fetching user profile from database...");
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Failed to fetch user profile.")
            } else {
                const user = {
                    id: 1,
                    name: "Alton Hudson",
                    age: 38,
                    email: "alton@hotmail.com"
                };
                resolve(user);
            }
        }, 2000)
    })
}


function getUserComments() {
    return new Promise((resolve, reject) => {
        console.log("Fetching user comments from thread...");
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Unable to load user comments")
            } else {
                const userComments = [
                    "Seems to be fake!",
                    "That was the best video I've ever seen",
                    "I wonder how they got the dog to speak?"
                ];
                resolve(userComments);
            }    
        }, 2000)
    });
}

function getUserPost() {
    return new Promise((resolve,reject) => {
        console.log("Fetching user post from video...");
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Error fetching user posts")
            } else {
                const post = {
                    user: "Alton Hudson",
                    content: "Can't beleive I saw a talking dog in a YouTube video!"
                };
                resolve(post);
            }   
        }, 2000);

    })
}


async function getUserContent() {
    const results = {
        profile: null,
        comments: null, 
        post: null,
    };


    try {
        results.profile = await getUserData()
        console.log("User profile retrieved");
    } catch (error) {
        console.error("Profile error:",error);
    }

    try {
        results.comments = await getUserComments()
        console.log("Comments retrieved");
    } catch (error) {
        console.error("Comments error:", error);
    }

    try {
        results.post = await getUserPost()
        console.log("Post retrieved");
    } catch (error) {
        console.error("Post error:", error)
    }
    console.log("\nCombined results:");

    if (results.profile) {
        console.log("\nUser profile received:");
        console.log(` Name: ${results.profile.name}`);
        console.log(` Age: ${results.profile.age}`);
        console.log(` Email: ${results.profile.email}`);
    } else {
        console.log("User Profile: Unable to load at this time." );
    }

    if (results.comments) {
        console.log("\nUser Comments received:");
        results.comments.forEach(c => console.log("- " + c))
    } else {
        console.log("Unable to load user comments at this time.");
    }

    if (results.post) {
        console.log("\nUser post received:");
        console.log(`Posted by: ${results.post.user}`);
        console.log(`Content: ${results.post.content}`);
    } else {
        console.log("Unable to load user posts at this time.");
    }

}

getUserContent()
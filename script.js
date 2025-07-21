
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
                    content: "Can't beleive I saw a talking dog in a YouTube video!!"
                };
                resolve(post);
            }   
        }, 2000);

    })
}

async function executeTasks() {
    try {
        const profile = await getUserData();
        console.log("User profile received:");
        console.log("Name:", profile.name);
        console.log("Age:", profile.age);
        console.log("Email:", profile.email);
    
    } catch (error) {
        console.error("Error:",error);
    }

    try {
        const comments = await getUserComments();
        console.log("User Comments received:");
        comments.forEach(c => console.log("- " + c))
    } catch (error) {
        console.error("Error:", error);
    }

    try {
        const post = await getUserPost();
        console.log("User post received:");
        console.log("Posted by:", post.user);
        console.log("Content:", post.content);
    
    } catch (error) {
        console.error("Error:", error)
        return
    }
}

executeTasks()
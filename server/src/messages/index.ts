export const messages = {
    user: {
        usernameAlreadyExists: "User with given username already exists.",
        userCreated: "User created.",
        userNotFound: "User with given id not found.",
        userUpdated: "User updated.",
        userProfileUpdated: "User profile updated."
    },
    post: {
        postCreated: "Post created.",
        postNotFound: "Post not found.",
        postUpdated: "Post updated.",
        postDeleted: "Post deleted.",
        postRetrieved: "Post retrieved.",
        postSlugAlreadyExists: "Post with given title already exists."
    },
    database: {
        databaseFail: "Database problems. Try again later."
    },
    auth: {
        invalidSignIn: "Invalid username or password.",
        signedIn: "User signed in.",
        userNotSignedIn: "Token expired. Sign in again.",
        tokenInvalid: "Invalid token.",
        userStillSignedIn: "User is still signed in."
    },
    forbidden: {
        notPostAuthor: "You are not author of that post.",
        notAuthor: "You are not auhtor of that profile."
    },
    file: {
        fileNotProvided: "File was not provided."
    }
}
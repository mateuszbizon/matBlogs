export const messages = {
    user: {
        usernameAlreadyExists: "User with given username already exists.",
        userCreated: "User created.",
        userNotFound: "User not found.",
        userUpdated: "User updated.",
        userProfileUpdated: "User profile updated.",
        userRetrieved: "User retrieved.",
        usersRetrieved: "Users retrieved."
    },
    post: {
        postCreated: "Post created.",
        postNotFound: "Post not found.",
        postUpdated: "Post updated.",
        postDeleted: "Post deleted.",
        postRetrieved: "Post retrieved.",
        postSlugAlreadyExists: "Post with given title already exists.",
        postsRetrieved: "Posts retrieved."
    },
    comment: {
        commentCreated: "Comment created.",
        commentNotFound: "Comment with given id not found.",
        commentDeleted: "Comment deleted.",
        commentReplyCreated: "Reply to comment created."
    },
    rating: {
        postRated: "Post rated."
    },
    search: {
        searchEmpty: "Search value can't be empty."
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
        notAuthor: "You are not author of that profile.",
        notCommentAuthor: "You are not author of that comment."
    },
    file: {
        fileNotProvided: "File was not provided."
    }
}
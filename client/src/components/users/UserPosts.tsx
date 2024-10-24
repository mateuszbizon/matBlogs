"use client";

import useGetUserPosts from "@/hooks/useGetUserPosts";
import React from "react";
import UserPostsList from "../lists/UserPostsList";
import UserPostCard from "../cards/UserPostCard";

type UserPostsProps = {
	userId: string;
};

function UserPosts({ userId }: UserPostsProps) {
	const { userPosts, isLoadingUserPosts } = useGetUserPosts({ userId, page: 1, sort: "" });
	console.log(userPosts?.data?.posts);

	return (
		<div>
			{userPosts?.data && (
				<UserPostsList
					posts={userPosts.data.posts}
					renderItem={(post) => (
                        <UserPostCard key={post.id} post={post} />
                    )}
				/>
			)}
		</div>
	);
}

export default UserPosts;

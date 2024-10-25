"use client";

import useGetUserPosts from "@/hooks/useGetUserPosts";
import React, { useState } from "react";
import UserPostsList from "../lists/UserPostsList";
import UserPostCard from "../cards/UserPostCard";
import UserPostsFilters from "./UserPostsFilters";
import { TPostFilters } from "@/types";

type UserPostsProps = {
	userId: string;
};

function UserPosts({ userId }: UserPostsProps) {
	const [sort, setSort] = useState<TPostFilters["sort"]>()
	const { userPosts, isLoadingUserPosts } = useGetUserPosts({ userId, page: 1, sort });
	console.log(userPosts?.data?.posts);

	return (
		<div>
			<div className="mb-5">
				<UserPostsFilters
					onChange={(filters) => {
						setSort(filters.sort)
					}} 
				/>
			</div>
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

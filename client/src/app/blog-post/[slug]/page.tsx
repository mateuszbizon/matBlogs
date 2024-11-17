"use client";

import ErrorMessage from "@/components/messages/ErrorMessage";
import CircleLoading from "@/components/loadings/CircleLoading";
import Post from "@/components/posts/Post";
import useGetSinglePost from "@/hooks/api/posts/useGetSinglePost";
import { useParams } from "next/navigation";
import React from "react";

function PostPage() {
	const { slug } = useParams<{ slug: string }>();
	const { singlePost, isSinglePostLoading, isSinglePostError, error } =
		useGetSinglePost({ slug });

	return (
		<div className='main-container main-padding-y'>
			{isSinglePostLoading && <CircleLoading />}
			{isSinglePostError && (
				<ErrorMessage statusCode={error?.response?.status} />
			)}
			{singlePost?.data && <Post post={singlePost.data} />}
		</div>
	);
}

export default PostPage;

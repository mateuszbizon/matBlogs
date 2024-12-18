"use client";

import React from "react";
import useGetSingleUser from "@/hooks/api/users/useGetSingleUser";
import { useParams } from "next/navigation";
import ErrorMessage from "@/components/messages/ErrorMessage";
import UserProfileLoading from "@/components/loadings/UserProfileLoading";
import UserProfile from "@/components/users/UserProfile";
import UserPosts from "@/components/users/UserPosts";

function UserPage() {
	const params = useParams<{ username: string }>();
	const { userProfile, isLoadingUserProfile, isErrorUserProfile, error } =
		useGetSingleUser({ username: params.username });

	return (
		<div>
			{userProfile?.data && (
				<>
					<UserProfile profile={userProfile.data} />
					<div className='mt-10'>
						<UserPosts userId={userProfile.data.user.id} />
					</div>
				</>
			)}
			{isLoadingUserProfile && <UserProfileLoading />}
			{isErrorUserProfile && (
				<ErrorMessage statusCode={error?.response?.status} />
			)}
		</div>
	);
}

export default UserPage;

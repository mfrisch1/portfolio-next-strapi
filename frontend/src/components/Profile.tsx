import { getProfile } from "@/lib/api/profiles"
import { StrapiSingleResponse } from "@/types/common";
import Profile from "@/types/profile";
import ProfileModal from "./ProfileModal";

export default async function ProfilePage() {
	const data: StrapiSingleResponse<Profile> = await getProfile();
	const profile: Profile = data.data;
	return (
	<div>
			<ProfileModal profile={profile} />
	</div>
	)
}

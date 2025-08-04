import { STRAPI_URL } from "@/lib/strapi"
import Profile from "@/types/profile"
import { StrapiResponse, StrapiSingleResponse } from "@/types/common"

export async function getProfile(): Promise<StrapiSingleResponse<Profile>> {
	const res = await fetch(`${STRAPI_URL}/api/profile`);
	if (!res.ok) {
		throw new Error(`Failed to fetch profile: ${res.status}`)
	}
	return res.json();
}

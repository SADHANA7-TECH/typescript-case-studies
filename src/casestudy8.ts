type Profile = {
    username: string;
    bio: string | null;
    avatarUrl?: string;
};
let profile1: Profile ={
    username: "sana",
    bio: null
};

let profile2: Profile ={
    username: "sam",
    bio: "Doctor at aaaa",
    avatarUrl: "http://example.com/avatar.jpg"
};
function showProfile(profile: Profile): void {
  const bioText =
    profile.bio === null
      ? "No bio available"
      : profile.bio;

  const avatar =
    profile.avatarUrl !== undefined
      ? profile.avatarUrl
      : "https://example.com/default-avatar.png";

  console.log(`Username: ${profile.username}`);
  console.log(`Bio: ${bioText}`);
  console.log(`Avatar: ${avatar}`);
  console.log("----------------------");
}
showProfile(profile1);
showProfile(profile2);

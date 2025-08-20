import { useEffect } from "react";
import { useGetUser } from "@/graphql/profile/hooks";
import { userVar } from "@/graphql/profile/state";
import FallbackLoader from "@/components/FallbackLoader";
import RepositoryList from "./RepositoryList";
import { useAppParams } from "@/hooks/useAppParams";
import ProfileCard from "./ProfileCard";
import NotFound from "../NotFound";

function Profile() {
  const { username } = useAppParams();
  const { data, loading, error } = useGetUser();

  useEffect(() => {
    if (!username) return;
    userVar(username);
  }, [username]);

  if (loading) {
    return <FallbackLoader />;
  }

  if (!data || error) {
    return <NotFound />;
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProfileCard
        name={data.user.name}
        login={data.user.login}
        bio={data.user.bio}
        avatarUrl={data.user.avatarUrl}
        followers={data.user.followers.totalCount}
        following={data.user.following.totalCount}
      />
      <div className="col-span-2">
        <RepositoryList />
      </div>
    </section>
  );
}

export default Profile;

import { useEffect } from "react";
import { useGetUser } from "@/graphql/profile/hooks";
import { userVar } from "@/graphql/profile/state";
import FallbackLoader from "@/components/FallbackLoader";
import RepositoryList from "./RepositoryList";
import ProfileCard from "./ProfileCard";
import NotFound from "../NotFound";
import { useParams } from "react-router";

function Profile() {
  const { username } = useParams();
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
        name={data.name}
        login={data.login}
        bio={data.bio}
        avatarUrl={data.avatarUrl}
        followers={data.followersCount}
        following={data.followingCount}
      />
      <div className="col-span-2">
        <RepositoryList />
      </div>
    </section>
  );
}

export default Profile;

import { useEffect, useMemo } from "react";
import { useGetUser } from "@/graphql/profile/hooks";
import { userVar } from "@/graphql/profile/state";
import FallbackLoader from "@/components/FallbackLoader";
import RepositoryList from "./RepositoryList";
import { useAppParams } from "@/hooks/useAppParams";
import ProfileCard from "./ProfileCard";
import NotFound from "../NotFound";
import { userDetailsAdapter } from "@/graphql/profile/adapters";

function Profile() {
  const { username } = useAppParams();
  const { data, loading, error } = useGetUser();

  const userDetails = useMemo(() => {
    if (data) {
      return userDetailsAdapter(data);
    }
    return undefined;
  }, [data]);

  useEffect(() => {
    if (!username) return;
    userVar(username);
  }, [username]);

  if (loading) {
    return <FallbackLoader />;
  }

  if (!userDetails || error) {
    return <NotFound />;
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProfileCard
        name={userDetails.name}
        login={userDetails.login}
        bio={userDetails.bio}
        avatarUrl={userDetails.avatarUrl}
        followers={userDetails.followersCount}
        following={userDetails.followingCount}
      />
      <div className="col-span-2">
        <RepositoryList />
      </div>
    </section>
  );
}

export default Profile;

import TeamImageGalleryCard from './TeamImageGalleryCard';
import { TeamWrapper } from './FooterModalTeam.styled';

export default function FooterModalTeamList({ users }) {
  return (
    <TeamWrapper>
      {users.map(({ id, avatar, username, role, linkedin, github }) => (
        <TeamImageGalleryCard
          key={id}
          avatar={avatar}
          username={username}
          role={role}
          linkedin={linkedin}
          github={github}
        ></TeamImageGalleryCard>
      ))}
    </TeamWrapper>
  );
}

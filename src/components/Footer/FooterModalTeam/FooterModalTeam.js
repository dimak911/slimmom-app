import { useState } from 'react';
import FooterTeamBtn from '../FooterTeamBtn';
import FooterModalTeamList from './TeamImageGalleryList';

import { team } from './users.js';

export const FooterModalTeam = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <FooterTeamBtn onClick={openModal} />
      {open && <FooterModalTeamList users={team} />};
    </>
  );
};

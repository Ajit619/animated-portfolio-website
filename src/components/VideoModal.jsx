import { Modal, useMantineTheme } from '@mantine/core';
import intro from '../img/intro.mp4'

function VideoModal({modal,setModal}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modal}
      onClose={()=>setModal(false)}
      size="60%"
    >
      <video className='video' src={intro} autoPlay></video>
      
    </Modal>
  );
}

export default VideoModal
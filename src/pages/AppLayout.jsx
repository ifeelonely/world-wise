import Map from '../components/map/Map';
import SideBar from '../components/sideBar/SideBar';

import styles from './AppLayout.module.css'

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;

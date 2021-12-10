import { IonIcon, IonContent, IonPage } from '@ionic/react';
import styles from './Passe.module.css';
import { arrowBack, notificationsOutline } from 'ionicons/icons';
import TicketShapeBasePage from '../../../components/TicketShapeBasePage/TicketShapeBasePage';
import { useSelector } from 'react-redux';

const Passe = () => {

  const transitPass = useSelector(state => state.data.activeUser.transitPass);

  const profile = transitPass.profile == "4_18" || transitPass.profile == "Sub23" ? transitPass.profile : "normal";

  return (
    <IonPage>
      <TicketShapeBasePage title="Passe" id={transitPass.id}>
        <div className={styles.content}>
          <div className={styles.card}>
            <img src={"/assets/passTypes/" + profile + ".png"} alt="Imagem do Cartão do Passe"></img>
          </div>
          <div className={styles.info}>
            <div className={styles.modalidade}>
              <div className={styles.bold}>Modalidade</div>
              <div>{transitPass.type}</div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.perfil}>
                <div className={styles.bold}>Perfil</div>
                <div>{transitPass.profile}</div>
              </div>
              <div className={styles.validade}>
                <div className={styles.bold}>Validade</div>
                <div>{new Date(transitPass.validity).toLocaleDateString()}</div>
              </div>
            </div>
          </div>
        </div>
      </TicketShapeBasePage>
    </IonPage>
  );
};

export default Passe;

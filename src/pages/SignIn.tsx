import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonItemGroup,
  IonItemDivider,
  IonLabel,
  IonItem,
  IonInput,
  IonButton
} from "@ionic/react";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
  return (
    <IonContent>
      <IonGrid>
        <IonRow
          style={{ height: "96vh" }}
          class="ion-justify-content-start ion-align-items-center"
        >
          <IonCol class="ion-text-center" size="4" offset="4">
            <IonItemGroup>
              <IonItemDivider>
                <IonLabel>Email</IonLabel>
              </IonItemDivider>
              <IonItem>
                <IonLabel>
                  <IonInput />
                </IonLabel>
              </IonItem>
              <IonItemDivider>
                <IonLabel>Password</IonLabel>
              </IonItemDivider>
              <IonItem>
                <IonLabel>
                  <IonInput />
                </IonLabel>
              </IonItem>
              <IonItemDivider />
              <Link to="/home">
                <IonButton
                  size="large"
                  expand="block"
                  color="primary"
                >
                  Sign In
                </IonButton>
              </Link>
              <Link to="/sign-up" className="ion-margin">Create New Account</Link>
            </IonItemGroup>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default SignIn;

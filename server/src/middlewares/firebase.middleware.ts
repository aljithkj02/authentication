import admin, { ServiceAccount } from 'firebase-admin'
import serviceAccount from '../.confidential/firebase-adminsdk.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount)
});

export const getFirebaseUser = async (token: string) => {
    try {
        const decodedToken = await admin.auth().verifyIdToken(token);

        console.log({decodedToken})
        const user = await admin.auth().getUser(decodedToken.uid);

        console.log({user})
        
        return {
            status: true,
            data: {
                name: user.displayName,
                id: user.uid,
                email: user.email,
                createdAt: user.metadata.creationTime
            }
        }
    } catch (error) {
        return {
            status: false,
            message: (error as Error).message
        }
    }
}
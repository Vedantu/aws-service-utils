import SecretsManager from './aws/secretsManager';
import { SecretParams } from './types/secretsManager';

const services = {
    secretsManager: {
        getSecret: (secretParams: SecretParams) => {
            const secretsManager = new SecretsManager({
                region: secretParams.region,
                secretName: secretParams.secretName
            });
            return secretsManager.getSecrets();
        }
    }
}

module.exports = {
    services
}
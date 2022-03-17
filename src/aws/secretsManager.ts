import AWS from 'aws-sdk';
/**
 * @class SecretsManager
 * @description This class is used to interact with AWS Secrets Manager
 */
class SecretsManager {
    private client: AWS.SecretsManager;
    public region: string;
    public secretName: string;
    constructor({ region, secretName }: { region: string; secretName: string }) {
        this.client = new AWS.SecretsManager({ region });
        this.secretName = secretName;
        this.region = region;
    }

    /**
     * Fetches secret keys from secretId provided
     * @returns {Promise<{ [key: string]: string }>}
     */
    async getSecrets(): Promise<{ [key: string]: string }> {
        const data = await this.client.getSecretValue({ SecretId: this.secretName }).promise();
        return JSON.parse(data.SecretString!);
    }
}

export default SecretsManager;
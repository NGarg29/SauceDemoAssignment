import * as dotenv from "dotenv";
import { EnvironmentInterface } from "./environment.interface";

dotenv.config();
const env: NodeJS.ProcessEnv = process.env;

const environment: EnvironmentInterface  = {
    Email: env.EMAIL || '',
    Password: env.PASSWORD || '',
    ApplicationUrl: env.APPLICATION_URL || ''
}

export default environment;


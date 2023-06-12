export {};

/*
 Required types definition to use
 the .env file with their respecting types.
*/
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONTRACT_LIST_ADDRESS: string;
      WEB3_URL: string;
    }
  }
}

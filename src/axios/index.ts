const config = {
    env: import.meta.env.APP_ENVIRONMENT,
    appName: import.meta.env.NEXT_PUBLIC_APP_NAME || 'STARS OF AFRICA',
    baseUrl: import.meta.env.VITE_BASE_URL,
  };
  
  console.log(config.baseUrl, 'baseUrl from config')
  export default config;
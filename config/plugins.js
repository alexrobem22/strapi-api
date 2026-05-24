/**
 * @param {{ env: any }} params
 */
module.exports = ({ env }) => ({
  upload: {
    config: {
      // Aqui dizemos para usar o pacote oficial que você está instalando
      provider: 'cloudinary', 
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
        timeout: 60000, // <--- ADICIONE ESTA LINHA AQUI
      },
      actionOptions: {
        upload: {
            debug: true,
        },
        delete: {},
      },
    },
  },
});
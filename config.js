export default {
    MONGODB_URL:process.env.MONGODB_URL || 'mongodb+srv://nawe:nawe1234@transport.jlugw.mongodb.net/transport?retryWrites=true&w=majority',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret'
}
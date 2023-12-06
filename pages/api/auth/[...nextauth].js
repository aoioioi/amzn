import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  //Configure one or more authetication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    // Add other providers here
  ],

  // Database is optional but required to persist accounts in db
  // database: process.env.DATEBASE_URL,
};

export default NextAuth(authOptions);
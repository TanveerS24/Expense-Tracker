import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";

passport.use(new GoogleStrategy({
    clientID: "895617163482-01gtrrh4j93mjl0akslfcnbdruu0ru1n.apps.googleusercontent.com",
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/api/users/auth/google/callback",
    scope: ["profile", "email"]
}, (accessToken, refreshToken, profile, callback) => {
    // Here you would find or create a user in your database
    callback(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

export default passport;

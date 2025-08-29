import GoogleStratergy from "passport-google-oauth20";
import passport from "passport";

passport.use(new GoogleStratergy({
    clientID: process.env.CLIENT_ID,
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

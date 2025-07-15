import React from "react";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../../utilities/firebase-login";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        toast("Login Successful");
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result.user)
      if(result.user.emailVerified){
        toast.success("Login Successful")
        navigate("/")
      } else {
        toast.error("Please verify your email")
      }
    })
    .catch(error => {
      console.log(error.message)
      toast.error(error.message)
    })
  }

  return (
    <Card className="w-full max-w-sm mx-auto mt-50 mb-50">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
          <Button type="submit" className="w-full cursor-pointer mt-5">
            Login
          </Button>
          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full hover:bg-info hover:text-black cursor-pointer mt-2"
          >
            Login with Google
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary hover:underline">
            Signup
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Login;

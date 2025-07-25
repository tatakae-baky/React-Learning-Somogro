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
import { useId, useMemo, useState } from "react";
import { CheckIcon, EyeIcon, EyeOffIcon, XIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "@/utilities/firebase-login";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const navigate = useNavigate();
  const id = useId();
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState("");

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const checkStrength = (pass) => {
    const requirements = [
      { regex: /.{8,}/, text: "At least 8 characters" },
      { regex: /[0-9]/, text: "At least 1 number" },
      { regex: /[a-z]/, text: "At least 1 lowercase letter" },
      { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
    ];

    return requirements.map((req) => ({
      met: req.regex.test(pass),
      text: req.text,
    }));
  };

  const strength = checkStrength(password);

  const strengthScore = useMemo(() => {
    return strength.filter((req) => req.met).length;
  }, [strength]);

  const getStrengthColor = (score) => {
    if (score === 0) return "bg-border";
    if (score <= 1) return "bg-red-500";
    if (score <= 2) return "bg-orange-500";
    if (score === 3) return "bg-amber-500";
    return "bg-emerald-500";
  };

  const getStrengthText = (score) => {
    if (score === 0) return "Enter a password";
    if (score <= 2) return "Weak password";
    if (score === 3) return "Medium password";
    return "Strong password";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checkbox = e.target.checkbox.checked;
    const username = e.target.username.value;
    console.log(email, password, checkbox, username);

    if (!checkbox) {
      setError("Please agree to the terms of service");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        result.user.displayName = username;
        updateProfile(result.user, {
          displayName: username,
        });

        sendEmailVerification(auth.currentUser)
          .then(() => {
            toast.success("Email sent, please verify your email");
            signOut(auth).then(() => {
              navigate("/login");
            });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Card className="w-full max-w-sm mx-auto mt-30">
      <CardHeader>
        <CardTitle>Signup to your account</CardTitle>
        <CardDescription>
          Enter your email below to signup to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="John Doe"
                required
                name="username"
              />
            </div>
            {/* Email input field */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                name="email"
              />
            </div>
            {/* Password input field */}
            <div>
              {/* Password input field with toggle visibility button */}
              <div className="*:not-first:mt-2">
                <Label htmlFor={id}>Password</Label>
                <div className="relative">
                  <Input
                    id={id}
                    className="pe-9"
                    placeholder="Password"
                    type={isVisible ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-describedby={`${id}-description`}
                  />
                  <button
                    className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                    type="button"
                    onClick={toggleVisibility}
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    aria-pressed={isVisible}
                    aria-controls="password"
                  >
                    {isVisible ? (
                      <EyeOffIcon
                        className="cursor-pointer"
                        size={16}
                        aria-hidden="true"
                      />
                    ) : (
                      <EyeIcon
                        className="cursor-pointer"
                        size={16}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </div>
              </div>

              {/* Password strength indicator */}
              <div
                className="bg-border mt-3 mb-4 h-1 w-full overflow-hidden rounded-full"
                role="progressbar"
                aria-valuenow={strengthScore}
                aria-valuemin={0}
                aria-valuemax={4}
                aria-label="Password strength"
              >
                <div
                  className={`h-full ${getStrengthColor(
                    strengthScore
                  )} transition-all duration-500 ease-out`}
                  style={{ width: `${(strengthScore / 4) * 100}%` }}
                ></div>
              </div>

              {/* Password strength description */}
              <p
                id={`${id}-description`}
                className="text-foreground mb-2 text-sm font-medium"
              >
                {getStrengthText(strengthScore)}. Must contain:
              </p>

              {/* Password requirements list */}
              <ul className="space-y-1.5" aria-label="Password requirements">
                {strength.map((req, index) => (
                  <li key={index} className="flex items-center gap-2">
                    {req.met ? (
                      <CheckIcon
                        size={16}
                        className="text-emerald-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <XIcon
                        size={16}
                        className="text-muted-foreground/80"
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className={`text-xs ${
                        req.met ? "text-emerald-600" : "text-muted-foreground"
                      }`}
                    >
                      {req.text}
                      <span className="sr-only">
                        {req.met
                          ? " - Requirement met"
                          : " - Requirement not met"}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Terms of service checkbox */}
            <div className="flex items-center gap-2">
              <Checkbox id={id} name="checkbox" />
              <Label htmlFor={id}>
                I agree to the{" "}
                <a
                  className="underline"
                  href="https://originui.com"
                  target="_blank"
                >
                  terms of service
                </a>
              </Label>
            </div>
          </div>
          <Button type="submit" className="w-full cursor-pointer mt-4">
            Signup
          </Button>
          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignUpForm;

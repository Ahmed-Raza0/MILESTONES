import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Signup(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex  items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 h-screen sm:max-w-md p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center w-full justify-center bg-gradient-to-r from-indigo-500 to-purple-600 h-screen p-4">
        <form className="w-full sm:max-w-md bg-white p-8 rounded-xl shadow-lg space-y-6">
          <h1 className="text-3xl font-semibold text-center text-gray-800">Create an Account</h1>
          
          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link className="text-indigo-600 font-medium underline" href="/sign-in">
              Sign in
            </Link>
          </p>

          <div className="flex flex-col gap-6 mt-6">
            {/* Email Field */}
            <div>
              <Label htmlFor="email" className="text-lg font-medium text-gray-800">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              />
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="password" className="text-lg font-medium text-gray-800">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Your password"
                minLength={6}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <SubmitButton
                formAction={signUpAction}
                pendingText="Signing up..."
                className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              >
                Sign Up
              </SubmitButton>
            </div>
          </div>

          {/* Form Message */}
          <FormMessage message={searchParams} />
        </form>
      </div>
    </>
  );
}
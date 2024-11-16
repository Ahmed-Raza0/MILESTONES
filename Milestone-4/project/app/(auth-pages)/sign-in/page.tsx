import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="flex items-center justify-center w-full min-h-screen p-4 bg-gradient-to-r from-indigo-600 to-purple-500">
      <form className="w-full sm:max-w-md bg-white p-8 rounded-xl shadow-xl space-y-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800">Sign In</h1>
        <p className="text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <Link className="text-indigo-600 font-medium underline" href="/sign-up">
            Sign up
          </Link>
        </p>

        {/* Form Fields */}
        <div className="flex flex-col gap-6 mt-6">
          <div>
            <Label htmlFor="email" className="text-lg font-medium text-gray-800">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-lg font-medium text-gray-800">Password</Label>
              <Link
                className="text-xs text-indigo-600 underline"
                href="/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              required
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <SubmitButton
              formAction={signInAction}
              pendingText="Signing In..."
              className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign In
            </SubmitButton>
          </div>
        </div>

        {/* Form Message */}
        <FormMessage message={searchParams} />
      </form>
    </div>
  );
}

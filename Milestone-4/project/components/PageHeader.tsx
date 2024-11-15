import AuthLogo from "@/components/store";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";


const PageHeader = () => {
  return (
    <main className="bg-black flex flex-col items-center">
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
    <nav className="w-full flex  justify-center border-b border-b-foreground/10 h-16">
    <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
      <div className="flex gap-5 items-center font-semibold">
        <div className="flex items-center gap-2">
          <AuthLogo />
        </div>
      </div>
      {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
    </div>
  </nav>
  </div>
  </main>
  )
}

export default PageHeader